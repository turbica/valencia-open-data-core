# valencia-open-data-core

[![Licencia: AGPL v3](https://img.shields.io/badge/licencia-AGPL--3.0-blue.svg)](LICENSE)
[![Open Source](https://img.shields.io/badge/open%20source-s%C3%AD-brightgreen.svg)](LICENSE)

> **Proyecto open source** publicado bajo la licencia **GNU Affero General Public License v3.0 (AGPL-3.0)**.
> Puedes usar, estudiar, modificar y redistribuir el código, siempre que las versiones modificadas,
> incluidas las que se ofrezcan como servicio en red, se publiquen con la misma licencia. Texto completo en [`LICENSE`](LICENSE).

**Módulo común de conectores CKAN, gestión de instantáneas inmutables (`snapshots`) y utilidades geoespaciales** para los tres observatorios sociales de datos abiertos de València y la Comunitat Valenciana:

| Repositorio | Proyecto |
|---|---|
| [`turbica/radar-vivienda`](https://github.com/turbica/radar-vivienda) | Radar de Presión Residencial, Desplazamiento Comercial y Equidad de Barrio |
| [`turbica/escudo-hidrologico`](https://github.com/turbica/escudo-hidrologico) | Escudo Comunitario de Alerta Hidrológica, Sequía y Protección de Equipamientos |
| [`turbica/monitor-vmp`](https://github.com/turbica/monitor-vmp) | Monitor de Seguridad de Movilidad Personal (VMP) y Accesibilidad Intermunicipal |

---

## Instalación

En cualquiera de los repositorios consumidores (`pnpm` / `npm`, Node.js 24+):

```json
{
  "dependencies": {
    "@turbica/valencia-open-data-core": "github:turbica/valencia-open-data-core#main"
  }
}
```

---

## Módulos incluidos

### 1. Cliente CKAN (`CkanClient`)

Cliente tipado y validado con **Zod** para consultar cualquier portal CKAN v3 (`/api/3/action`), como **Dades Obertes GVA** (`dadesobertes.gva.es`) y **Open Data Ayuntamiento de València** (`opendata.vlci.valencia.es`).

```ts
import { CkanClient } from "@turbica/valencia-open-data-core";

const ckan = new CkanClient({
  baseUrl: "https://opendata.vlci.valencia.es/api/3/action",
  userAgent: "radar-vivienda/0.1.0 (+https://github.com/turbica/radar-vivienda)",
});

const pkg = await ckan.packageShow("tur-gestur-vt");
const csvResources = ckan.filterResourcesByFormat(pkg, ["CSV"]);
```

### 2. Gestor Inmutable de Instantáneas (`SnapshotManager`)

Implementa la regla arquitectónica común de los tres observatorios: **las descargas de `data/raw/` nunca se sobrescriben**.

- Genera nombres fechados (`YYYY-MM-DD_<datasetId>.<ext>` o con marca horaria `YYYY-MM-DDTHH-mm-ssZ` para telemetría).
- Calcula el hash `SHA-256` de cada descarga y guarda un archivo adjunto `.meta.json` con metadatos de trazabilidad (`sourceUrl`, `capturedAt`, `sha256`, `bytes`, `etag`, `lastModified`, `license`).
- Evita duplicar archivos si el `SHA-256` coincide exactamente con la última instantánea disponible (`skipIfUnchanged: true`), o añade un sufijo de hash corto si el archivo cambió dentro del mismo día.
- Soporta un adaptador opcional (`mirror`) para replicar automáticamente cada captura en almacenamiento externo (p. ej. **Google Cloud Storage**).

```ts
import { SnapshotManager } from "@turbica/valencia-open-data-core";

const snapshots = new SnapshotManager({ rawDir: "./data/raw" });

const result = await snapshots.downloadAndSave({
  category: "gva-viviendas-turisticas",
  datasetId: "tur-gestur-vt",
  extension: "csv",
  sourceUrl: "https://dadesobertes.gva.es/.../lista-de-viviendas-turisticas.csv",
});
```

### 3. Utilidades Geoespaciales y Normalización (`geo`)

Funciones de normalización de códigos territoriales valencianos (códigos postales `46xxx`, códigos de distrito/barrio y secciones censales) y validación estructural de `FeatureCollection` GeoJSON.

---

## Desarrollo y Tests

```bash
pnpm install
pnpm build
pnpm test
```

---

## Archivos de IA y agentes de código

Puedes usar asistentes de IA y agentes de código (Claude Code, Codex, Gemini, Cursor, Copilot, Windsurf, Cline, Aider…) para trabajar en este proyecto, pero **sus archivos de configuración, instrucciones, memoria o contexto no se pueden publicar en este repositorio**. Cada desarrollador los mantiene solo en su copia local.

- Ya están en [`.gitignore`](.gitignore). No los fuerces con `git add -f`.
- La comprobación automática [`.github/workflows/politica-archivos-ia.yml`](.github/workflows/politica-archivos-ia.yml) rechaza cualquier push o pull request que los incluya.

## Licencia

Este proyecto es **software libre y open source** bajo la licencia [GNU AGPL-3.0](LICENSE).
