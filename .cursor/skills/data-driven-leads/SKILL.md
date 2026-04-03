---
name: data-driven-leads
description: Use when generating, validating, deduplicating, or inserting business leads for Data Driven (OSM, JSON batches, Notion, phone/email/social validation). Use when the user mentions leads-notion, insert_all_leads, CIUDAD_MAP, or lead_source workflows.
---

# Data Driven — Generación y calidad de leads

## Alcance

Los scripts de inserción y los JSON de lotes **pueden vivir en otro repo o carpeta** del workspace del usuario (p. ej. proyecto `leads-notion`). Esta skill define el **procedimiento**; las reglas concretas del workspace (guardarraíles, verificación con navegador, exclusiones) tienen prioridad si están activas.

## Principios (orden)

1. **Origen real** — No inventar contacto. Preferir fuentes verificables (OSM/Overpass, web oficial, listas curadas).
2. **JSON fuente** — Guardar `leads_*.json` con el mismo esquema que el insertador antes de insertar.
3. **Normalizar** — Campos típicos: `nombre`, `telefono`, `correo`, `instagram`, `website`, `facebook`, `giro`, `ciudad`, `lead_source`. Mapear `ciudad` a opciones exactas del destino (p. ej. Notion / `CIUDAD_MAP` en el script que uses).
4. **Validar por campo** — Teléfono (≥10 dígitos útiles, normalización +52 si aplica); correo plausible; **website/Facebook/Instagram** solo si son reales y verificados (HTTP + **navegador** según reglas del workspace).
5. **Pagina (web vs Facebook)** — Preferir web si responde; si no, Facebook si responde; si ambos fallan, dejar vacío.
6. **Contacto mínimo** — Al menos uno válido entre teléfono, correo, Pagina verificada o Instagram verificado.
7. **Anti-duplicados** — Antes de insertar: nombre normalizado, últimos 10 dígitos de teléfono, dominio de Pagina, handle de Instagram vs base existente.
8. **Lotes** — Máximo ~30 por corrida salvo acuerdo distinto.
9. **Reporte** — Tras cada lote: agregados, duplicados, descartados (y motivo).

## Herramientas habituales (nombres de referencia)

Ajustar rutas al repo donde estén: `fetch_leads_osm_mexico.py`, `insert_all_leads.py`, `listas/NEGOCIOS_EXCLUIDOS.json`, scripts de auditoría o parche de ciudades.

## Ejemplo de giro de trabajo

1. Recolectar → JSON en disco.
2. Filtrar exclusiones por keywords.
3. Validar enlaces con navegador (obligatorio si las reglas del workspace lo exigen).
4. Ejecutar inserción con reporte.
5. Opcional: auditoría muestreada post-inserción.
