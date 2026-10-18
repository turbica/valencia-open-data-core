import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import {
  CkanClient,
  isFeatureCollection,
  normalizeBarrioCode,
  normalizeCkanActionBaseUrl,
  normalizeCodDistBar,
  normalizeTerritoryName,
  normalizeValencianPostalCode,
  SnapshotManager,
  type SnapshotMetadata,
} from "../dist/index.js";

describe("CkanClient & URL Normalization", () => {
  it("normalizes CKAN portal URLs to /api/3/action", () => {
    assert.equal(
      normalizeCkanActionBaseUrl("https://opendata.vlci.valencia.es/"),
      "https://opendata.vlci.valencia.es/api/3/action"
    );
    assert.equal(
      normalizeCkanActionBaseUrl("http://www.dadesobertes.gva.es/api/3/action/"),
      "http://www.dadesobertes.gva.es/api/3/action"
    );
  });

  it("fetches packageShow and filters resources by format", async () => {
    const mockFetch: typeof fetch = async (input) => {
      const url = String(input);
      assert.ok(url.includes("/api/3/action/package_show?id=tur-gestur-vt"));
      return new Response(
        JSON.stringify({
          success: true,
          result: {
            id: "758f8f8e-c5af-4622-b268-a6c591710a51",
            name: "tur-gestur-vt",
            title: "Lista de viviendas turísticas",
            metadata_modified: "2026-10-18T08:00:00Z",
            resources: [
              {
                id: "b1bdc28e-9813-422a-ab7a-63c21290493d",
                name: "CSV viviendas turísticas",
                format: "csv",
                url: "https://dadesobertes.gva.es/lista-de-viviendas-turisticas.csv",
                last_modified: "2026-10-18T07:55:00Z",
              },
              {
                id: "other-id",
                name: "Ficha HTML",
                format: "HTML",
                url: "https://dadesobertes.gva.es/ficha.html",
              },
            ],
          },
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    };

    const client = new CkanClient({
      baseUrl: "https://dadesobertes.gva.es",
      fetchImpl: mockFetch,
    });

    const pkg = await client.packageShow("tur-gestur-vt");
    assert.equal(pkg.name, "tur-gestur-vt");
    const csvResources = client.filterResourcesByFormat(pkg, ["CSV"]);
    assert.equal(csvResources.length, 1);
    assert.equal(csvResources[0]?.id, "b1bdc28e-9813-422a-ab7a-63c21290493d");

    assert.equal(
      client.hasResourceChanged(csvResources[0]!, {
        lastModified: "2026-10-18T07:55:00Z",
      }),
      false
    );
    assert.equal(
      client.hasResourceChanged(csvResources[0]!, {
        lastModified: "2026-10-10T00:00:00Z",
      }),
      true
    );
  });
});

describe("SnapshotManager (Immutable data/raw storage)", () => {
  it("saves immutable snapshots, deduplicates identical SHA-256 and never overwrites", async () => {
    const tmpDir = await mkdtemp(path.join(os.tmpdir(), "vod-core-test-"));
    try {
      const mirrored: SnapshotMetadata[] = [];
      const manager = new SnapshotManager({
        rawDir: tmpDir,
        mirror: {
          async mirrorSnapshot({ metadata }) {
            mirrored.push(metadata);
          },
        },
      });

      const date = new Date("2026-10-18T10:00:00.000Z");
      const firstContent = Buffer.from("SIGNATURA,MUNICIPIO\nVT-1,VALENCIA\n", "utf-8");

      // 1. Primera captura
      const res1 = await manager.saveSnapshot({
        category: "gva-viviendas-turisticas",
        datasetId: "tur-gestur-vt",
        extension: "csv",
        sourceUrl: "https://dadesobertes.gva.es/vt.csv",
        content: firstContent,
        capturedAt: date,
      });

      assert.equal(res1.savedNewFile, true);
      assert.equal(res1.metadata.fileName, "2026-10-18_tur-gestur-vt.csv");
      assert.equal(mirrored.length, 1);

      // 2. Segunda captura con el MISMO contenido -> skipIfUnchanged evita duplicar
      const res2 = await manager.saveSnapshot({
        category: "gva-viviendas-turisticas",
        datasetId: "tur-gestur-vt",
        extension: "csv",
        sourceUrl: "https://dadesobertes.gva.es/vt.csv",
        content: firstContent,
        capturedAt: new Date("2026-10-18T11:00:00.000Z"),
      });

      assert.equal(res2.savedNewFile, false);
      assert.equal(res2.metadata.sha256, res1.metadata.sha256);
      assert.equal(mirrored.length, 1);

      // 3. Tercera captura el mismo día pero con NUEVO contenido -> nunca sobrescribe, añade shortHash
      const secondContent = Buffer.from(
        "SIGNATURA,MUNICIPIO\nVT-1,VALENCIA\nVT-2,VALENCIA\n",
        "utf-8"
      );
      const res3 = await manager.saveSnapshot({
        category: "gva-viviendas-turisticas",
        datasetId: "tur-gestur-vt",
        extension: "csv",
        sourceUrl: "https://dadesobertes.gva.es/vt.csv",
        content: secondContent,
        capturedAt: new Date("2026-10-18T12:00:00.000Z"),
      });

      assert.equal(res3.savedNewFile, true);
      assert.notEqual(res3.metadata.fileName, res1.metadata.fileName);
      assert.ok(res3.metadata.fileName.startsWith("2026-10-18_tur-gestur-vt_"));

      // El primer archivo sigue intacto en disco
      const preservedFirst = await readFile(res1.fullPath, "utf-8");
      assert.equal(preservedFirst, firstContent.toString("utf-8"));

      const allSnapshots = await manager.listSnapshots("gva-viviendas-turisticas");
      assert.equal(allSnapshots.length, 2);
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  it("compresses snapshots with zstd/gzip, hashes the original content and reads them back", async () => {
    const tmpDir = await mkdtemp(path.join(os.tmpdir(), "vod-core-test-"));
    try {
      const mirrored: Buffer[] = [];
      const manager = new SnapshotManager({
        rawDir: tmpDir,
        compression: "zstd",
        mirror: {
          async mirrorSnapshot({ content }) {
            mirrored.push(content);
          },
        },
      });

      const html = Buffer.from(`<table>${"<tr><td>CAUDAL</td></tr>".repeat(500)}</table>`, "utf-8");
      const base = {
        category: "saih-jucar",
        datasetId: "aforos",
        extension: "html",
        sourceUrl: "https://saih.chj.es/aforos",
        includeTimeInFileName: true,
        skipIfUnchanged: false,
      };

      // 1. Compresión por defecto del gestor (zstd)
      const res1 = await manager.saveSnapshot({
        ...base,
        content: html,
        capturedAt: new Date("2026-10-18T10:00:00.000Z"),
      });

      assert.equal(res1.metadata.fileName, "2026-10-18T10-00-00Z_aforos.html.zst");
      assert.equal(res1.metadata.compression, "zstd");
      assert.equal(res1.metadata.bytes, html.byteLength);
      assert.ok(res1.metadata.storedBytes! < html.byteLength);
      assert.equal(res1.metadata.sha256, createHash("sha256").update(html).digest("hex"));
      assert.equal((await readFile(res1.fullPath)).byteLength, res1.metadata.storedBytes);
      assert.equal(mirrored[0]?.byteLength, res1.metadata.storedBytes);
      assert.deepEqual(await manager.readSnapshot(res1.metadata), html);

      // 2. Compresión por captura (gzip) y sin skipIfUnchanged: se guarda aunque sea idéntico
      const res2 = await manager.saveSnapshot({
        ...base,
        content: html,
        compression: "gzip",
        capturedAt: new Date("2026-10-18T10:05:00.000Z"),
      });

      assert.equal(res2.savedNewFile, true);
      assert.equal(res2.metadata.fileName, "2026-10-18T10-05-00Z_aforos.html.gz");
      assert.equal(res2.metadata.sha256, res1.metadata.sha256);
      assert.deepEqual(await manager.readSnapshot(res2.metadata), html);

      // 3. La deduplicación compara el contenido original aunque esté comprimido
      const res3 = await manager.saveSnapshot({
        ...base,
        content: html,
        skipIfUnchanged: true,
        capturedAt: new Date("2026-10-18T10:10:00.000Z"),
      });
      assert.equal(res3.savedNewFile, false);
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });
});

describe("Geo & Valencian Territorial Normalization", () => {
  it("normalizes postal codes, barrio codes and names", () => {
    assert.equal(normalizeValencianPostalCode("46001"), "46001");
    assert.equal(normalizeValencianPostalCode(3001), "03001");
    assert.equal(normalizeValencianPostalCode("28001"), null);
    assert.equal(normalizeBarrioCode(1, 3), "01.03");
    assert.equal(normalizeCodDistBar(61), "061");
    assert.equal(normalizeCodDistBar("03", "4"), "034");
    assert.equal(normalizeCodDistBar("6", "62"), "062");
    assert.equal(normalizeTerritoryName("El Cabanyal-El Canyamelar"), "el cabanyal el canyamelar");
    assert.equal(
      isFeatureCollection({
        type: "FeatureCollection",
        features: [{ type: "Feature", geometry: null, properties: { id: 1 } }],
      }),
      true
    );
  });
});
