import { z } from "zod";
export const CkanOrganizationSchema = z
    .object({
    id: z.string().optional(),
    name: z.string().optional(),
    title: z.string().optional(),
})
    .passthrough();
export const CkanResourceSchema = z
    .object({
    id: z.string(),
    package_id: z.string().optional(),
    name: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    format: z.string().nullable().optional(),
    mimetype: z.string().nullable().optional(),
    url: z.string(),
    hash: z.string().nullable().optional(),
    size: z.number().nullable().optional(),
    created: z.string().nullable().optional(),
    last_modified: z.string().nullable().optional(),
    metadata_modified: z.string().nullable().optional(),
})
    .passthrough();
export const CkanTagSchema = z
    .object({
    id: z.string().optional(),
    name: z.string(),
    display_name: z.string().optional(),
})
    .passthrough();
export const CkanPackageSchema = z
    .object({
    id: z.string(),
    name: z.string(),
    title: z.string().nullable().optional(),
    notes: z.string().nullable().optional(),
    license_id: z.string().nullable().optional(),
    license_title: z.string().nullable().optional(),
    license_url: z.string().nullable().optional(),
    metadata_created: z.string().nullable().optional(),
    metadata_modified: z.string().nullable().optional(),
    author: z.string().nullable().optional(),
    maintainer: z.string().nullable().optional(),
    organization: CkanOrganizationSchema.nullable().optional(),
    resources: z.array(CkanResourceSchema).default([]),
    tags: z.array(CkanTagSchema).optional().default([]),
})
    .passthrough();
export const CkanPackageSearchResultSchema = z
    .object({
    count: z.number(),
    results: z.array(CkanPackageSchema),
})
    .passthrough();
export const CkanDatastoreSearchResultSchema = z
    .object({
    resource_id: z.string(),
    total: z.number().optional(),
    records: z.array(z.record(z.unknown())),
    fields: z
        .array(z
        .object({
        id: z.string(),
        type: z.string().optional(),
    })
        .passthrough())
        .optional(),
})
    .passthrough();
//# sourceMappingURL=types.js.map