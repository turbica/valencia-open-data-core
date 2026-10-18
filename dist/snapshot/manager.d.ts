import { type DownloadSnapshotInput, type SaveSnapshotInput, type SnapshotManagerOptions, type SnapshotMetadata, type SnapshotSaveResult } from "./types.js";
/**
 * Gestor común de instantáneas (`data/raw/`) que garantiza que las descargas
 * jamás se sobrescriban y conserva la trazabilidad criptográfica (SHA-256) y documental.
 */
export declare class SnapshotManager {
    readonly rawDir: string;
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