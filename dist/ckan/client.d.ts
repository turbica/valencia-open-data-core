import { type CkanClientOptions, type CkanDatastoreSearchParams, type CkanDatastoreSearchResult, type CkanPackage, type CkanPackageSearchParams, type CkanPackageSearchResult, type CkanResource } from "./types.js";
/**
 * Normaliza cualquier URL de portal CKAN para asegurar que termina en `/api/3/action`.
 */
export declare function normalizeCkanActionBaseUrl(rawUrl: string): string;
/**
 * Cliente común para la API CKAN v3 (`/api/3/action`) de Dades Obertes GVA,
 * Ayuntamiento de València y portales compatibles.
 */
export declare class CkanClient {
    readonly actionBaseUrl: string;
    private readonly userAgent;
    private readonly timeoutMs;
    private readonly maxRetries;
    private readonly fetchFn;
    constructor(options: CkanClientOptions);
    /**
     * Obtiene los metadatos completos de un dataset (`package_show`).
     */
    packageShow(idOrName: string): Promise<CkanPackage>;
    /**
     * Busca datasets en el catálogo CKAN (`package_search`).
     */
    packageSearch(params?: CkanPackageSearchParams): Promise<CkanPackageSearchResult>;
    /**
     * Obtiene los metadatos de un recurso concreto (`resource_show`).
     */
    resourceShow(id: string): Promise<CkanResource>;
    /**
     * Consulta registros tabulares directamente desde el DataStore de CKAN (`datastore_search`).
     */
    datastoreSearch(params: CkanDatastoreSearchParams): Promise<CkanDatastoreSearchResult>;
    /**
     * Filtra los recursos de un paquete CKAN según uno o varios formatos (ej. `["CSV", "GeoJSON"]`),
     * ignorando mayúsculas/minúsculas.
     */
    filterResourcesByFormat(pkg: CkanPackage, formats: string[]): CkanResource[];
    /**
     * Determina si un recurso CKAN ha cambiado respecto a una instantánea previa
     * comparando hash reportado y fechas `last_modified` / `metadata_modified`.
     */
    hasResourceChanged(resource: CkanResource, previous?: {
        lastModified?: string | null;
        sha256?: string | null;
        ckanHash?: string | null;
    }): boolean;
    private callAction;
    private fetchWithRetry;
}
//# sourceMappingURL=client.d.ts.map