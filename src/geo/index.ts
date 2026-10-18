import { z } from "zod";

export const GeoJsonFeatureSchema = z
  .object({
    type: z.literal("Feature"),
    geometry: z
      .object({
        type: z.string(),
        coordinates: z.unknown(),
      })
      .nullable(),
    properties: z.record(z.unknown()).nullable(),
  })
  .passthrough();

export const GeoJsonFeatureCollectionSchema = z
  .object({
    type: z.literal("FeatureCollection"),
    features: z.array(GeoJsonFeatureSchema),
  })
  .passthrough();

export type GeoJsonFeature = z.infer<typeof GeoJsonFeatureSchema>;
export type GeoJsonFeatureCollection = z.infer<typeof GeoJsonFeatureCollectionSchema>;

/**
 * Valida si un objeto desconocido es un `FeatureCollection` GeoJSON válido.
 */
export function isFeatureCollection(value: unknown): value is GeoJsonFeatureCollection {
  return GeoJsonFeatureCollectionSchema.safeParse(value).success;
}

/**
 * Normaliza un código postal de la provincia de València (46xxx) o de la Comunitat Valenciana
 * (03xxx, 12xxx, 46xxx) asegurando 5 dígitos con cero inicial si procede.
 */
export function normalizeValencianPostalCode(raw: string | number | null | undefined): string | null {
  if (raw === null || raw === undefined) return null;
  const digits = String(raw).trim().replace(/\D+/g, "");
  if (!digits) return null;
  const padded = digits.padStart(5, "0");
  if (padded.length !== 5) return null;
  const prefix = padded.slice(0, 2);
  if (prefix === "46" || prefix === "03" || prefix === "12") {
    return padded;
  }
  return null;
}

/**
 * Normaliza códigos municipales de distrito (2 dígitos) o barrio (ej. "01.1" o "0101")
 * del Ayuntamiento de València y su Oficina de Estadística.
 */
export function normalizeBarrioCode(
  distrito: string | number,
  barrio: string | number
): string {
  const d = String(distrito).trim().replace(/\D+/g, "").padStart(2, "0");
  const b = String(barrio).trim().replace(/\D+/g, "").padStart(2, "0");
  return `${d}.${b}`;
}

/**
 * Normaliza nombres de barrios o municipios en valenciano/castellano para cruces de texto
 * (elimina diacríticos, pasa a minúsculas y compacta espacios).
 */
export function normalizeTerritoryName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
