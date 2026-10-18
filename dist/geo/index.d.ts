import { z } from "zod";
export declare const GeoJsonFeatureSchema: z.ZodObject<{
    type: z.ZodLiteral<"Feature">;
    geometry: z.ZodNullable<z.ZodObject<{
        type: z.ZodString;
        coordinates: z.ZodUnknown;
    }, "strip", z.ZodTypeAny, {
        type: string;
        coordinates?: unknown;
    }, {
        type: string;
        coordinates?: unknown;
    }>>;
    properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    type: z.ZodLiteral<"Feature">;
    geometry: z.ZodNullable<z.ZodObject<{
        type: z.ZodString;
        coordinates: z.ZodUnknown;
    }, "strip", z.ZodTypeAny, {
        type: string;
        coordinates?: unknown;
    }, {
        type: string;
        coordinates?: unknown;
    }>>;
    properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    type: z.ZodLiteral<"Feature">;
    geometry: z.ZodNullable<z.ZodObject<{
        type: z.ZodString;
        coordinates: z.ZodUnknown;
    }, "strip", z.ZodTypeAny, {
        type: string;
        coordinates?: unknown;
    }, {
        type: string;
        coordinates?: unknown;
    }>>;
    properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const GeoJsonFeatureCollectionSchema: z.ZodObject<{
    type: z.ZodLiteral<"FeatureCollection">;
    features: z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"Feature">;
        geometry: z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            coordinates: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            type: string;
            coordinates?: unknown;
        }, {
            type: string;
            coordinates?: unknown;
        }>>;
        properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodLiteral<"Feature">;
        geometry: z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            coordinates: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            type: string;
            coordinates?: unknown;
        }, {
            type: string;
            coordinates?: unknown;
        }>>;
        properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodLiteral<"Feature">;
        geometry: z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            coordinates: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            type: string;
            coordinates?: unknown;
        }, {
            type: string;
            coordinates?: unknown;
        }>>;
        properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    type: z.ZodLiteral<"FeatureCollection">;
    features: z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"Feature">;
        geometry: z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            coordinates: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            type: string;
            coordinates?: unknown;
        }, {
            type: string;
            coordinates?: unknown;
        }>>;
        properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodLiteral<"Feature">;
        geometry: z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            coordinates: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            type: string;
            coordinates?: unknown;
        }, {
            type: string;
            coordinates?: unknown;
        }>>;
        properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodLiteral<"Feature">;
        geometry: z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            coordinates: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            type: string;
            coordinates?: unknown;
        }, {
            type: string;
            coordinates?: unknown;
        }>>;
        properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    type: z.ZodLiteral<"FeatureCollection">;
    features: z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"Feature">;
        geometry: z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            coordinates: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            type: string;
            coordinates?: unknown;
        }, {
            type: string;
            coordinates?: unknown;
        }>>;
        properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodLiteral<"Feature">;
        geometry: z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            coordinates: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            type: string;
            coordinates?: unknown;
        }, {
            type: string;
            coordinates?: unknown;
        }>>;
        properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodLiteral<"Feature">;
        geometry: z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            coordinates: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            type: string;
            coordinates?: unknown;
        }, {
            type: string;
            coordinates?: unknown;
        }>>;
        properties: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
}, z.ZodTypeAny, "passthrough">>;
export type GeoJsonFeature = z.infer<typeof GeoJsonFeatureSchema>;
export type GeoJsonFeatureCollection = z.infer<typeof GeoJsonFeatureCollectionSchema>;
/**
 * Valida si un objeto desconocido es un `FeatureCollection` GeoJSON válido.
 */
export declare function isFeatureCollection(value: unknown): value is GeoJsonFeatureCollection;
/**
 * Normaliza un código postal de la provincia de València (46xxx) o de la Comunitat Valenciana
 * (03xxx, 12xxx, 46xxx) asegurando 5 dígitos con cero inicial si procede.
 */
export declare function normalizeValencianPostalCode(raw: string | number | null | undefined): string | null;
/**
 * Normaliza códigos municipales de distrito (2 dígitos) o barrio (ej. "01.1" o "0101")
 * del Ayuntamiento de València y su Oficina de Estadística.
 */
export declare function normalizeBarrioCode(distrito: string | number, barrio: string | number): string;
/**
 * Normaliza nombres de barrios o municipios en valenciano/castellano para cruces de texto
 * (elimina diacríticos, pasa a minúsculas y compacta espacios).
 */
export declare function normalizeTerritoryName(name: string): string;
//# sourceMappingURL=index.d.ts.map