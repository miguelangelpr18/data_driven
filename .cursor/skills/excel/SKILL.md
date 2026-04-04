---
name: excel
description: Use when the user invokes excel or works on spreadsheets for Data Driven or clients — models, cleaning, KPI tables, pivots, Power Query assumptions, templates. Use for .xlsx/.csv workflows and documenting conventions in-repo.
---

# excel — Hojas de cálculo

## Principios

- **Fuente única de verdad:** nombrar archivo, pestaña y rango cuando propongas fórmulas.
- **Reproducibilidad:** documentar supuestos (moneda, zona horaria, definición de “venta”, etc.).
- **Sin datos inventados:** si el usuario no pega datos, usar estructura vacía o ejemplo claramente etiquetado como ficticio.

## Buenas prácticas

- Tablas estructuradas (encabezados en fila 1, sin celdas fusionadas para datos).
- Evitar valores hardcodeados críticos sin celda de parámetro.
- Versionado: si el repo guarda plantillas, path consistente (p. ej. `templates/excel/` cuando exista).

## Aprendizaje progresivo

- Cuando el usuario corrija un criterio (ej. cómo calculan margen), proponer una línea en `docs/data-driven/` o README de plantilla para **no repetir el error**.

## Límites

- No ejecutar macros opacas sin revisión; preferir fórmulas y Power Query documentadas.
