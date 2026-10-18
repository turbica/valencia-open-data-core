import { z } from "zod";
export const SnapshotCompressionSchema = z.enum(["none", "gzip", "zstd"]);
export const SnapshotMetadataSchema = z.object({
    category: z.string().min(1),
    datasetId: z.string().min(1),
    fileName: z.string().min(1),
    relativePath: z.string().min(1),
    sourceUrl: z.string().url(),
    capturedAt: z.string().datetime(),
    /**
     * Hash y tamaño del contenido original (sin comprimir), tal como llegó de la fuente.
     */
    sha256: z.string().length(64),
    bytes: z.number().int().nonnegative(),
    /**
     * Compresión y tamaño del archivo en disco. Ausentes en instantáneas anteriores a la v0.2.0
     * (equivalen a `"none"` y `bytes`).
     */
    compression: SnapshotCompressionSchema.optional(),
    storedBytes: z.number().int().nonnegative().optional(),
    etag: z.string().nullable().optional(),
    lastModified: z.string().nullable().optional(),
    license: z.string().nullable().optional(),
    publisher: z.string().nullable().optional(),
});
//# sourceMappingURL=types.js.map