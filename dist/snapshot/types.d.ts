import { z } from "zod";
export declare const SnapshotMetadataSchema: z.ZodObject<{
    category: z.ZodString;
    datasetId: z.ZodString;
    fileName: z.ZodString;
    relativePath: z.ZodString;
    sourceUrl: z.ZodString;
    capturedAt: z.ZodString;
    sha256: z.ZodString;
    bytes: z.ZodNumber;
    etag: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastModified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publisher: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    category: string;
    datasetId: string;
    fileName: string;
    relativePath: string;
    sourceUrl: string;
    capturedAt: string;
    sha256: string;
    bytes: number;
    lastModified?: string | null | undefined;
    etag?: string | null | undefined;
    license?: string | null | undefined;
    publisher?: string | null | undefined;
}, {
    category: string;
    datasetId: string;
    fileName: string;
    relativePath: string;
    sourceUrl: string;
    capturedAt: string;
    sha256: string;
    bytes: number;
    lastModified?: string | null | undefined;
    etag?: string | null | undefined;
    license?: string | null | undefined;
    publisher?: string | null | undefined;
}>;
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
 * Interfaz para replicar instantáneas en almacenamiento externo (ej. Google Cloud Storage).
 */
export interface SnapshotMirrorAdapter {
    mirrorSnapshot(params: {
        metadata: SnapshotMetadata;
        content: Buffer;
    }): Promise<void>;
}
export interface SnapshotManagerOptions {
    /**
     * Ruta al directorio `data/raw` donde se guardan las instantáneas inmutables.
     */
    rawDir: string;
    /**
     * Cabecera User-Agent por defecto para las descargas HTTP.
     */
    userAgent?: string;
    /**
     * Adaptador opcional para replicar cada nueva instantánea en la nube (p. ej. GCS).
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
//# sourceMappingURL=types.d.ts.map