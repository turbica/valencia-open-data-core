import { type DownloadSnapshotInput, type SaveSnapshotInput, type SnapshotManagerOptions, type SnapshotMetadata, type SnapshotSaveResult } from "./types.js";
/**
 * Gestor común de instantáneas (`data/raw/`) y artefactos (`data/processed/`)
 * que garantiza que las descargas crudas jamás se sobrescriban y permite operar
 * tanto en volúmenes locales como en entornos stateless (GCP Cloud Run + Cloud Storage).
 */
export declare class SnapshotManager {
    readonly rawDir: string;
    readonly processedDir: string;
    private readonly userAgent;
    private readonly mirror?;
    private readonly fetchFn;
    constructor(options: SnapshotManagerOptions);
    /**
     * Descarga un recurso desde su URL de origen y lo persiste de forma inmutable en `data/raw/`.
     */
    downloadAndSave(input: DownloadSnapshotInput): Promise<SnapshotSaveResult>;
    /**
     * Guarda un buffer en `data/raw/<category>/` garantizando inmutabilidad (`flag: "wx"`).
     */
    saveSnapshot(input: SaveSnapshotInput): Promise<SnapshotSaveResult>;
    /**
     * Hidrata el directorio local `data/raw/<category>` descargando desde el `mirror` remoto (p. ej. GCS)
     * cualquier instantánea que aún no exista localmente. Ideal para contenedores sin estado (Cloud Run Jobs).
     */
    hydrateCategoryFromMirror(category: string, datasetId?: string): Promise<number>;
    /**
     * Guarda un artefacto procesado en `data/processed/` y lo replica en el almacenamiento remoto (si está configurado).
     */
    saveProcessedArtifact(params: {
        fileName: string;
        content: Buffer | string;
        contentType?: string;
    }): Promise<string>;
    /**
     * Lista todas las instantáneas registradas en `data/raw/<category>/`,
     * ordenadas cronológicamente de más antigua a más reciente.
     */
    listSnapshots(category: string, datasetId?: string): Promise<SnapshotMetadata[]>;
    /**
     * Devuelve la instantánea más reciente para una categoría (y opcionalmente `datasetId`).
     */
    getLatestSnapshot(category: string, datasetId?: string): Promise<SnapshotMetadata | null>;
}
//# sourceMappingURL=manager.d.ts.map