---
name: powerbi
description: Use when the user invokes powerbi or works on Power BI for Data Driven or clients — model, relationships, DAX, star schema, refresh, Row-Level Security concepts, performance. Use for reports and semantic models, not generic Excel unless bridging to PBI.
---

# powerbi — Modelo y reportes

## Enfoque

- **Modelo primero:** dimensiones vs hechos, relaciones 1:* claras, evitar duplicar lógica en medidas y columnas calculadas sin necesidad.
- **DAX legible:** nombres de medidas consistentes; comentar medidas complejas.
- **Rendimiento:** reducir cardinalidad innecesaria, evitar columnas calculadas pesadas cuando basta medida.

## Entregables

- Listar tablas clave, relaciones y medidas “oficiales” cuando propongas un diseño.
- Si no hay acceso al archivo .pbix, trabajar en pseudocódigo DAX y checklist de validación.

## Datos

- No asumir nombres de campos reales; pedir esquema o muestra. No inventar KPIs de cliente.

## Relación con otros roles

- ETL pesado a veces conviene documentarlo en **excel** o en scripts; **powerbi** consume el modelo limpio.
