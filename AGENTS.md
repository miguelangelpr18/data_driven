# AGENTS — Data Driven (repo)

Este repositorio concentra el **sitio público** (`data-driven/`, Next.js export estático) y la **documentación de negocio** (`docs/data-driven/`). El agente debe alinear copy y cambios técnicos con esa base.

## Qué es Data Driven (resumen)

Consultoría de datos y automatización: ayudamos a empresas a ver su operación, encontrar mejoras, automatizar reportes y decidir con información real — combinando estrategia, datos y ejecución técnica.

## Mapa rápido

| Tipo de tarea | Dónde mirar | Skill / notas |
|---------------|-------------|----------------|
| Sitio web (Next, UI, SEO estático, despliegue) | `data-driven/` | `data-driven-web` + rule `data-driven-next` |
| Voz de marca, servicios, ICP | `docs/data-driven/` | Leer `brand-voice.md`, `icp.md` |
| Generación / validación de leads, Notion, OSM | Repo o workspace donde vivan los scripts Python; si están en este repo, carpeta `leads/` | `data-driven-leads` + rule `data-driven-leads` (globs `leads/**/*.py`) + reglas del workspace (`leads-data-quality-guardrails`, `leads-verificar-urls-browser`) |
| Marketing / contenido (futuro) | — | Añadir skill cuando exista playbook |

## Documentación

- [docs/data-driven/brand-voice.md](docs/data-driven/brand-voice.md)
- [docs/data-driven/icp.md](docs/data-driven/icp.md)

## Convenciones

- Reglas globales del proyecto: `.cursor/rules/` (core siempre; Next solo bajo `data-driven/**`).
- Skills por área: `.cursor/skills/*/SKILL.md`.
