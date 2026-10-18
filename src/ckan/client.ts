import { z } from "zod";
import {
  type CkanClientOptions,
  type CkanDatastoreSearchParams,
  type CkanDatastoreSearchResult,
  CkanDatastoreSearchResultSchema,
  type CkanPackage,
  CkanPackageSchema,
  type CkanPackageSearchParams,
  type CkanPackageSearchResult,
  CkanPackageSearchResultSchema,
  type CkanResource,
  CkanResourceSchema,
} from "./types.js";

/**
 * Normaliza cualquier URL de portal CKAN para asegurar que termina en `/api/3/action`.
 */
export function normalizeCkanActionBaseUrl(rawUrl: string): string {
  const trimmed = rawUrl.trim().replace(/\/+$/, "");
  if (trimmed.endsWith("/api/3/action")) {
    return trimmed;
  }
  if (trimmed.endsWith("/api/3")) {
    return `${trimmed}/action`;
  }
  return `${trimmed}/api/3/action`;
}

/**
 * Cliente común para la API CKAN v3 (`/api/3/action`) de Dades Obertes GVA,
 * Ayuntamiento de València y portales compatibles.
 */
export class CkanClient {
  public readonly actionBaseUrl: string;
  private readonly userAgent: string;
  private readonly timeoutMs: number;
  private readonly maxRetries: number;
  private readonly fetchFn: typeof fetch;

  constructor(options: CkanClientOptions) {
    this.actionBaseUrl = normalizeCkanActionBaseUrl(options.baseUrl);
    this.userAgent =
      options.userAgent ??
      "valencia-open-data-core/0.1.0 (+https://github.com/turbica/valencia-open-data-core)";
    this.timeoutMs = options.timeoutMs ?? 30_000;
    this.maxRetries = options.maxRetries ?? 3;
    this.fetchFn = options.fetchImpl ?? globalThis.fetch;
  }

  /**
   * Obtiene los metadatos completos de un dataset (`package_show`).
   */
  async packageShow(idOrName: string): Promise<CkanPackage> {
    return this.callAction("package_show", { id: idOrName }, CkanPackageSchema);
  }

  /**
   * Busca datasets en el catálogo CKAN (`package_search`).
   */
  async packageSearch(params: CkanPackageSearchParams = {}): Promise<CkanPackageSearchResult> {
    const query: Record<string, string> = {};
    if (params.q !== undefined) query.q = params.q;
    if (params.fq !== undefined) query.fq = params.fq;
    if (params.rows !== undefined) query.rows = String(params.rows);
    if (params.start !== undefined) query.start = String(params.start);
    if (params.sort !== undefined) query.sort = params.sort;

    return this.callAction("package_search", query, CkanPackageSearchResultSchema);
  }

  /**
   * Obtiene los metadatos de un recurso concreto (`resource_show`).
   */
  async resourceShow(id: string): Promise<CkanResource> {
    return this.callAction("resource_show", { id }, CkanResourceSchema);
  }

  /**
   * Consulta registros tabulares directamente desde el DataStore de CKAN (`datastore_search`).
   */
  async datastoreSearch(
    params: CkanDatastoreSearchParams
  ): Promise<CkanDatastoreSearchResult> {
    const query: Record<string, string> = {
      resource_id: params.resource_id,
    };
    if (params.q !== undefined) query.q = params.q;
    if (params.filters !== undefined) query.filters = JSON.stringify(params.filters);
    if (params.limit !== undefined) query.limit = String(params.limit);
    if (params.offset !== undefined) query.offset = String(params.offset);
    if (params.sort !== undefined) query.sort = params.sort;

    return this.callAction("datastore_search", query, CkanDatastoreSearchResultSchema);
  }

  /**
   * Filtra los recursos de un paquete CKAN según uno o varios formatos (ej. `["CSV", "GeoJSON"]`),
   * ignorando mayúsculas/minúsculas.
   */
  filterResourcesByFormat(pkg: CkanPackage, formats: string[]): CkanResource[] {
    const normalizedTargets = new Set(formats.map((f) => f.trim().toUpperCase()));
    return pkg.resources.filter((res) => {
      const resFormat = (res.format ?? "").trim().toUpperCase();
      return normalizedTargets.has(resFormat);
    });
  }

  /**
   * Determina si un recurso CKAN ha cambiado respecto a una instantánea previa
   * comparando hash reportado y fechas `last_modified` / `metadata_modified`.
   */
  hasResourceChanged(
    resource: CkanResource,
    previous?: { lastModified?: string | null; sha256?: string | null; ckanHash?: string | null }
  ): boolean {
    if (!previous) return true;

    const remoteHash = resource.hash?.trim();
    if (remoteHash && previous.ckanHash && remoteHash === previous.ckanHash) {
      return false;
    }

    const remoteModified = resource.last_modified ?? resource.metadata_modified;
    if (remoteModified && previous.lastModified) {
      const remoteTime = Date.parse(remoteModified);
      const prevTime = Date.parse(previous.lastModified);
      if (!Number.isNaN(remoteTime) && !Number.isNaN(prevTime)) {
        return remoteTime > prevTime;
      }
      return remoteModified !== previous.lastModified;
    }

    return true;
  }

  private async callAction<T>(
    action: string,
    params: Record<string, string>,
    resultSchema: z.ZodType<T, z.ZodTypeDef, unknown>
  ): Promise<T> {
    const url = new URL(`${this.actionBaseUrl}/${action}`);
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(k, v);
    }

    const response = await this.fetchWithRetry(url.toString());
    if (!response.ok) {
      throw new Error(
        `CKAN HTTP error ${response.status} al invocar ${action} en ${url.toString()}`
      );
    }

    const payload = (await response.json()) as {
      success?: boolean;
      result?: unknown;
      error?: { message?: string; __type?: string };
    };

    if (!payload || payload.success !== true) {
      const errMsg = payload?.error?.message ?? "Respuesta CKAN con success=false";
      throw new Error(`Error API CKAN (${action}): ${errMsg}`);
    }

    return resultSchema.parse(payload.result);
  }

  private async fetchWithRetry(url: string): Promise<Response> {
    let lastError: unknown;
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), this.timeoutMs);
      try {
        const res = await this.fetchFn(url, {
          headers: {
            Accept: "application/json",
            "User-Agent": this.userAgent,
          },
          signal: controller.signal,
        });
        if (res.status >= 500 && attempt < this.maxRetries) {
          lastError = new Error(`HTTP ${res.status}`);
        } else {
          return res;
        }
      } catch (err) {
        lastError = err;
        if (attempt === this.maxRetries) {
          throw err;
        }
      } finally {
        clearTimeout(timer);
      }
      // Espera exponencial ligera (300ms, 600ms, 1200ms...)
      await new Promise((r) => setTimeout(r, 300 * Math.pow(2, attempt)));
    }
    throw lastError instanceof Error ? lastError : new Error(String(lastError));
  }
}
