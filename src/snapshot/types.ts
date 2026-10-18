import { z } from "zod";

export const SnapshotMetadataSchema = z.object({
  category: z.string().min(1),
  datasetId: z.string().min(1),
  fileName: z.string().min(1),
  relativePath: z.string().min(1),
  sourceUrl: z.string().url(),
  capturedAt: z.string().datetime(),
  sha256: z.string().length(64),
  bytes: z.number().int().nonnegative(),
  etag: z.string().nullable().optional(),
  lastModified: z.string().nullable().optional(),
  license: z.string().nullable().optional(),
  publisher: z.string().nullable().optional(),
});

export type SnapshotMetadata = z.infer<typeof SnapshotMetadataSchema>;

export interface SnapshotSaveResult {
  /**
   * `true` si se creó un nuevo archivo en `data/raw/`;
   * `false` si se omitió porque el contenido binario (`sha256`) es idéntico al último snapshot.
   */
  savedNewFile: boolean;
  /**
   * Ruta absoluta al archivo de datos en `data/raw/`.
   */
  fullPath: string;
  /**
   * Metadatos completos de la instantánea.
   */
  metadata: SnapshotMetadata;
}

/**
 * Interfaz para replicar e hidratar instantáneas (`raw/`) y artefactos (`processed/`)
 * en almacenamiento externo en la nube (ej. Google Cloud Storage), permitiendo ejecuciones
 * totalmente sin estado (stateless) en servicios como GCP Cloud Run.
 */
export interface SnapshotMirrorAdapter {
  mirrorSnapshot(params: {
    metadata: SnapshotMetadata;
    content: Buffer;
  }): Promise<void>;

  listRemoteSnapshots?(
    category: string,
    datasetId?: string
  ): Promise<SnapshotMetadata[]>;

  downloadRemoteSnapshot?(relativePath: string): Promise<Buffer | null>;

  saveProcessedArtifact?(params: {
    relativePath: string;
    content: Buffer;
    contentType?: string;
  }): Promise<void>;

  downloadProcessedArtifact?(relativePath: string): Promise<Buffer | null>;
}

export interface SnapshotManagerOptions {
  /**
   * Ruta al directorio `data/raw` donde se guardan las instantáneas inmutables.
   */
  rawDir: string;
  /**
   * Ruta opcional al directorio `data/processed` donde se guardan los datos procesados.
   */
  processedDir?: string;
  /**
   * Cabecera User-Agent por defecto para las descargas HTTP.
   */
  userAgent?: string;
  /**
   * Adaptador opcional para replicar e hidratar datos desde la nube (p. ej. GCS).
   */
  mirror?: SnapshotMirrorAdapter;
  /**
   * Implementación opcional de `fetch` (útil para tests unitarios).
   */
  fetchImpl?: typeof fetch;
}

export interface SaveSnapshotInput {
  category: string;
  datasetId: string;
  extension: string;
  sourceUrl: string;
  content: Buffer;
  capturedAt?: Date;
  /**
   * Si es `true`, utiliza marca horaria `YYYY-MM-DDTHH-mm-ssZ` en el nombre
   * (útil para telemetría cada 5 minutos en `escudo-hidrologico`).
   * Por defecto `false` (`YYYY-MM-DD`).
   */
  includeTimeInFileName?: boolean;
  /**
   * Si es `true` (por defecto), verifica si la última instantánea de la misma categoría y dataset
   * tiene exactamente el mismo `sha256` y evita duplicar el archivo en disco.
   */
  skipIfUnchanged?: boolean;
  etag?: string | null;
  lastModified?: string | null;
  license?: string | null;
  publisher?: string | null;
}

export interface DownloadSnapshotInput extends Omit<SaveSnapshotInput, "content"> {
  headers?: Record<string, string>;
  timeoutMs?: number;
}
