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
/**
 * Valida si un objeto desconocido es un `FeatureCollection` GeoJSON válido.
 */
export function isFeatureCollection(value) {
    return GeoJsonFeatureCollectionSchema.safeParse(value).success;
}
/**
 * Normaliza un código postal de la provincia de València (46xxx) o de la Comunitat Valenciana
 * (03xxx, 12xxx, 46xxx) asegurando 5 dígitos con cero inicial si procede.
 */
export function normalizeValencianPostalCode(raw) {
    if (raw === null || raw === undefined)
        return null;
    const digits = String(raw).trim().replace(/\D+/g, "");
    if (!digits)
        return null;
    const padded = digits.padStart(5, "0");
    if (padded.length !== 5)
        return null;
    const prefix = padded.slice(0, 2);
    if (prefix === "46" || prefix === "03" || prefix === "12") {
        return padded;
    }
    return null;
}
/**
 * Normaliza códigos municipales de distrito (2 dígitos) y barrio (2 dígitos) con punto ("01.03").
 */
export function normalizeBarrioCode(distrito, barrio) {
    const d = String(distrito).trim().replace(/\D+/g, "").padStart(2, "0");
    const b = String(barrio).trim().replace(/\D+/g, "").padStart(2, "0");
    return `${d}.${b}`;
}
/**
 * Normaliza el código municipal de 3 dígitos `coddistbar` del Ayuntamiento de València (`011`..`198`),
 * aceptando tanto un código combinado (`61` -> `'061'`, `'142'` -> `'142'`) como distrito y barrio por separado (`3`, `4` -> `'034'`).
 */
export function normalizeCodDistBar(distritoOrCombined, barrio) {
    if (distritoOrCombined === null || distritoOrCombined === undefined)
        return null;
    if (barrio !== undefined && barrio !== null && String(barrio).trim() !== "") {
        const d = String(distritoOrCombined).trim().replace(/\D+/g, "");
        const b = String(barrio).trim().replace(/\D+/g, "");
        if (!d || !b)
            return null;
        // En casos donde `barrio` ya viene como el código combinado de 2-3 dígitos (p.ej. 62)
        if (b.length >= 2 && b.startsWith(d)) {
            return b.padStart(3, "0");
        }
        return `${d.padStart(2, "0")}${b}`;
    }
    const combined = String(distritoOrCombined).trim().replace(/\D+/g, "");
    if (!combined)
        return null;
    const num = Number(combined);
    if (!Number.isFinite(num) || num < 11 || num > 199)
        return null;
    return combined.padStart(3, "0");
}
/**
 * Normaliza nombres de barrios o municipios en valenciano/castellano para cruces de texto
 * (elimina diacríticos, pasa a minúsculas y compacta espacios).
 */
export function normalizeTerritoryName(name) {
    return name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}
//# sourceMappingURL=index.js.map