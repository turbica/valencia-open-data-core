import { z } from "zod";
export declare const CkanOrganizationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const CkanResourceSchema: z.ZodObject<{
    id: z.ZodString;
    package_id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodString;
    hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodString;
    package_id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodString;
    hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodString;
    package_id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodString;
    hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const CkanTagSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const CkanPackageSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>>;
    resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        package_id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodString;
        hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        package_id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodString;
        hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        package_id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodString;
        hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodString;
    name: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>>;
    resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        package_id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodString;
        hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        package_id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodString;
        hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        package_id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodString;
        hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodString;
    name: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>>;
    resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        package_id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodString;
        hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        package_id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodString;
        hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        package_id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodString;
        hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const CkanPackageSearchResultSchema: z.ZodObject<{
    count: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    count: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    count: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        license_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maintainer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        resources: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            package_id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            format: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mimetype: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            url: z.ZodString;
            hash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            created: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            metadata_modified: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
}, z.ZodTypeAny, "passthrough">>;
export declare const CkanDatastoreSearchResultSchema: z.ZodObject<{
    resource_id: z.ZodString;
    total: z.ZodOptional<z.ZodNumber>;
    records: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    resource_id: z.ZodString;
    total: z.ZodOptional<z.ZodNumber>;
    records: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    resource_id: z.ZodString;
    total: z.ZodOptional<z.ZodNumber>;
    records: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">>;
export type CkanOrganization = z.infer<typeof CkanOrganizationSchema>;
export type CkanResource = z.infer<typeof CkanResourceSchema>;
export type CkanTag = z.infer<typeof CkanTagSchema>;
export type CkanPackage = z.infer<typeof CkanPackageSchema>;
export type CkanPackageSearchResult = z.infer<typeof CkanPackageSearchResultSchema>;
export type CkanDatastoreSearchResult = z.infer<typeof CkanDatastoreSearchResultSchema>;
export interface CkanClientOptions {
    /**
     * URL base del portal o de la API CKAN.
     * Acepta tanto la raíz del portal (`https://opendata.vlci.valencia.es/`)
     * como el endpoint de acciones (`https://dadesobertes.gva.es/api/3/action`).
     */
    baseUrl: string;
    /**
     * Cabecera User-Agent identificativa del proyecto cívico.
     */
    userAgent?: string;
    /**
     * Tiempo máximo de espera por petición en milisegundos (por defecto 30000 ms).
     */
    timeoutMs?: number;
    /**
     * Número de reintentos ante fallos transitorios de red o HTTP 5xx (por defecto 3).
     */
    maxRetries?: number;
    /**
     * Implementación opcional de `fetch` (útil para tests unitarios).
     */
    fetchImpl?: typeof fetch;
}
export interface CkanPackageSearchParams {
    q?: string;
    fq?: string;
    rows?: number;
    start?: number;
    sort?: string;
}
export interface CkanDatastoreSearchParams {
    resource_id: string;
    q?: string;
    filters?: Record<string, string | number | boolean>;
    limit?: number;
    offset?: number;
    sort?: string;
}
//# sourceMappingURL=types.d.ts.map