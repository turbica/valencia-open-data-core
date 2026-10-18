import { createHash } from "node:crypto";
import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  type DownloadSnapshotInput,
  type SaveSnapshotInput,
  type SnapshotManagerOptions,
  type SnapshotMetadata,
  SnapshotMetadataSchema,
  type SnapshotMirrorAdapter,
  type SnapshotSaveResult,
} from "./types.js";

async function fileExists(targetPath: string): Promise<boolean> {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

function sanitizeSegment(raw: string): string {
  return raw
    .trim()
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDatePrefix(date: Date, includeTime: boolean): string {
  const iso = date.toISOString();
  if (!includeTime) {
    return iso.slice(0, 10); // YYYY-MM-DD
  }
  // YYYY-MM-DDTHH-mm-ssZ (compatible con sistemas de archivos Windows y Linux)
  return `${iso.slice(0, 19).replace(/:/g, "-")}Z`;
}

/**
 * Gestor común de instantáneas (`data/raw/`) y artefactos (`data/processed/`)
 * que garantiza que las descargas crudas jamás se sobrescriban y permite operar
 * tanto en volúmenes locales como en entornos stateless (GCP Cloud Run + Cloud Storage).
 */
export class SnapshotManager {
  public readonly rawDir: string;
  public readonly processedDir: string;
  private readonly userAgent: string;
  private readonly mirror?: SnapshotMirrorAdapter;
  private readonly fetchFn: typeof fetch;

  constructor(options: SnapshotManagerOptions) {
    this.rawDir = path.resolve(options.rawDir);
    this.processedDir = options.processedDir
      ? path.resolve(options.processedDir)
      : path.resolve(this.rawDir, "..", "processed");
    this.userAgent =
      options.userAgent ??
      "valencia-open-data-core/0.1.0 (+https://github.com/turbica/valencia-open-data-core)";
    this.mirror = options.mirror;
    this.fetchFn = options.fetchImpl ?? globalThis.fetch;
  }

  /**
   * Descarga un recurso desde su URL de origen y lo persiste de forma inmutable en `data/raw/`.
   */
  async downloadAndSave(input: DownloadSnapshotInput): Promise<SnapshotSaveResult> {
    const controller = new AbortController();
    const timeoutMs = input.timeoutMs ?? 60_000;
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await this.fetchFn(input.sourceUrl, {
        headers: {
          "User-Agent": this.userAgent,
          ...input.headers,
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(
          `Error HTTP ${response.status} al descargar recurso desde ${input.sourceUrl}`
        );
      }

      const content = Buffer.from(await response.arrayBuffer());
      const etag = input.etag ?? response.headers.get("etag");
      const lastModified = input.lastModified ?? response.headers.get("last-modified");

      return await this.saveSnapshot({
        ...input,
        content,
        etag,
        lastModified,
      });
    } finally {
      clearTimeout(timer);
    }
  }

  /**
   * Guarda un buffer en `data/raw/<category>/` garantizando inmutabilidad (`flag: "wx"`).
   */
  async saveSnapshot(input: SaveSnapshotInput): Promise<SnapshotSaveResult> {
    const category = sanitizeSegment(input.category);
    const datasetId = sanitizeSegment(input.datasetId);
    const ext = input.extension.replace(/^\.+/, "").trim() || "dat";
    const now = input.capturedAt ?? new Date();
    const skipIfUnchanged = input.skipIfUnchanged ?? true;

    const sha256 = createHash("sha256").update(input.content).digest("hex");
    const shortHash = sha256.slice(0, 8);

    const categoryDir = path.join(this.rawDir, category);
    await mkdir(categoryDir, { recursive: true });

    if (skipIfUnchanged) {
      const latest = await this.getLatestSnapshot(category, datasetId);
      if (latest && latest.sha256 === sha256) {
        return {
          savedNewFile: false,
          fullPath: path.join(categoryDir, latest.fileName),
          metadata: latest,
        };
      }
    }

    const datePrefix = formatDatePrefix(now, input.includeTimeInFileName ?? false);
    let fileName = `${datePrefix}_${datasetId}.${ext}`;
    let fullPath = path.join(categoryDir, fileName);

    if (await fileExists(fullPath)) {
      fileName = `${datePrefix}_${datasetId}_${shortHash}.${ext}`;
      fullPath = path.join(categoryDir, fileName);
    }

    let counter = 1;
    while (await fileExists(fullPath)) {
      fileName = `${datePrefix}_${datasetId}_${shortHash}-${counter}.${ext}`;
      fullPath = path.join(categoryDir, fileName);
      counter++;
    }

    const relativePath = path.posix.join("raw", category, fileName);
    const metadata: SnapshotMetadata = {
      category,
      datasetId,
      fileName,
      relativePath,
      sourceUrl: input.sourceUrl,
      capturedAt: now.toISOString(),
      sha256,
      bytes: input.content.byteLength,
      etag: input.etag ?? null,
      lastModified: input.lastModified ?? null,
      license: input.license ?? null,
      publisher: input.publisher ?? null,
    };

    await writeFile(fullPath, input.content, { flag: "wx" });
    await writeFile(`${fullPath}.meta.json`, JSON.stringify(metadata, null, 2), {
      flag: "wx",
    });

    if (this.mirror) {
      await this.mirror.mirrorSnapshot({ metadata, content: input.content });
    }

    return {
      savedNewFile: true,
      fullPath,
      metadata,
    };
  }

  /**
   * Hidrata el directorio local `data/raw/<category>` descargando desde el `mirror` remoto (p. ej. GCS)
   * cualquier instantánea que aún no exista localmente. Ideal para contenedores sin estado (Cloud Run Jobs).
   */
  async hydrateCategoryFromMirror(
    category: string,
    datasetId?: string
  ): Promise<number> {
    if (!this.mirror?.listRemoteSnapshots || !this.mirror?.downloadRemoteSnapshot) {
      return 0;
    }

    const cleanCategory = sanitizeSegment(category);
    const categoryDir = path.join(this.rawDir, cleanCategory);
    await mkdir(categoryDir, { recursive: true });

    const remoteList = await this.mirror.listRemoteSnapshots(cleanCategory, datasetId);
    let downloadedCount = 0;

    for (const meta of remoteList) {
      const localDataPath = path.join(categoryDir, meta.fileName);
      const localMetaPath = `${localDataPath}.meta.json`;
      if (await fileExists(localDataPath)) {
        continue;
      }

      const content = await this.mirror.downloadRemoteSnapshot(meta.relativePath);
      if (!content) continue;

      await writeFile(localDataPath, content, { flag: "wx" });
      if (!(await fileExists(localMetaPath))) {
        await writeFile(localMetaPath, JSON.stringify(meta, null, 2), { flag: "wx" });
      }
      downloadedCount++;
    }

    return downloadedCount;
  }

  /**
   * Guarda un artefacto procesado en `data/processed/` y lo replica en el almacenamiento remoto (si está configurado).
   */
  async saveProcessedArtifact(params: {
    fileName: string;
    content: Buffer | string;
    contentType?: string;
  }): Promise<string> {
    await mkdir(this.processedDir, { recursive: true });
    const fullPath = path.join(this.processedDir, params.fileName);
    const buf =
      typeof params.content === "string"
        ? Buffer.from(params.content, "utf-8")
        : params.content;

    await writeFile(fullPath, buf);

    if (this.mirror?.saveProcessedArtifact) {
      const relativePath = path.posix.join("processed", params.fileName);
      await this.mirror.saveProcessedArtifact({
        relativePath,
        content: buf,
        contentType: params.contentType,
      });
    }

    return fullPath;
  }

  /**
   * Lista todas las instantáneas registradas en `data/raw/<category>/`,
   * ordenadas cronológicamente de más antigua a más reciente.
   */
  async listSnapshots(
    category: string,
    datasetId?: string
  ): Promise<SnapshotMetadata[]> {
    const cleanCategory = sanitizeSegment(category);
    const cleanDatasetId = datasetId ? sanitizeSegment(datasetId) : undefined;
    const categoryDir = path.join(this.rawDir, cleanCategory);

    if (!(await fileExists(categoryDir))) {
      return [];
    }

    const entries = await readdir(categoryDir);
    const metaFiles = entries.filter((f) => f.endsWith(".meta.json")).sort();
    const results: SnapshotMetadata[] = [];

    for (const metaFile of metaFiles) {
      try {
        const rawJson = await readFile(path.join(categoryDir, metaFile), "utf-8");
        const parsed = SnapshotMetadataSchema.parse(JSON.parse(rawJson));
        if (!cleanDatasetId || parsed.datasetId === cleanDatasetId) {
          results.push(parsed);
        }
      } catch {
        // Ignorar archivos .meta.json corruptos o de versiones incompatibles
      }
    }

    return results.sort((a, b) => a.capturedAt.localeCompare(b.capturedAt));
  }

  /**
   * Devuelve la instantánea más reciente para una categoría (y opcionalmente `datasetId`).
   */
  async getLatestSnapshot(
    category: string,
    datasetId?: string
  ): Promise<SnapshotMetadata | null> {
    const list = await this.listSnapshots(category, datasetId);
    return list.at(-1) ?? null;
  }
}
