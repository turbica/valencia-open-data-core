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
//# sourceMappingURL=types.js.map