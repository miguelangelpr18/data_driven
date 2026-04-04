---
name: leads
description: Use when the user invokes the leads role or works on Notion lead pipelines — generating, validating, deduplicating, or inserting leads (OSM, JSON batches, CIUDAD_MAP, insert_all_leads, exclusions). Use for leads-notion workflows and Python under leads/ in this repo.
---

# leads — Leads y Notion

Los scripts pueden estar **fuera** de este repo (p. ej. `leads-notion`). Las **rules del workspace** sobre calidad y verificación de URLs con navegador prevalecen.

## Orden de trabajo

1. Origen verificable (OSM, web oficial, listas curadas) — **no inventar** contacto.
2. JSON fuente `leads_*.json` alineado al insertador.
3. Normalizar: `nombre`, `telefono`, `correo`, `instagram`, `website`, `facebook`, `giro`, `ciudad`, `lead_source`; `ciudad` → opciones exactas Notion / `CIUDAD_MAP`.
4. Validar teléfono (≥10 dígitos útiles), correo, URLs (HTTP + navegador si aplica).
5. Pagina: web primero; si falla, Facebook; si ambos fallan, vacío.
6. Contacto mínimo: al menos uno entre teléfono, correo, Pagina o Instagram válidos.
7. Anti-duplicados vs Notion (nombre, últimos 10 dígitos, dominio, IG).
8. Lotes ~30; reporte post-lote (altas, duplicados, descartes).

## Referencias de scripts

`fetch_leads_osm_mexico.py`, `insert_all_leads.py`, `listas/NEGOCIOS_EXCLUIDOS.json` (rutas reales según workspace).
