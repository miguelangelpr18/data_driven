# AGENTS — Data Driven (repo)

Este repositorio concentra el **sitio público** (`data-driven/`, Next.js export estático) y la **documentación de negocio** (`docs/data-driven/`). Los **roles** viven como skills en `.cursor/skills/` (Cursor no permite nombrar subagentes en el tool `Task`; invocá el rol en el chat: *“actuá como web”*, *“usá skill leads”*, etc.).

## Qué es Data Driven (resumen)

Consultoría de datos y automatización: ayudamos a empresas a ver su operación, encontrar mejoras, automatizar reportes y decidir con información real — estrategia + datos + ejecución.

## Cómo usar esto si recién empezás (chats)

**No hace falta** abrir 10 chats el día uno. Dos formas válidas:

1. **Un solo chat + invocación por mensaje** (más simple): en el mismo hilo decís *“ahora como **web**…”* o *“pasá a **analista** para un deep dive”*. El modelo usa la skill que nombres. Mezclá poco: si estás debuggeando Next, no metas leads en el mismo mensaje.
2. **Un chat fijo por rol** (más orden cuando ya laburás seguido en eso): por ejemplo un chat “Data Driven — web” donde siempre pedís cambios al sitio; otro “Data Driven — leads”; otro “analista”. **Ventaja:** el historial queda limpio (menos ruido). **Desventaja:** más pestañas que revisar.

**Recomendación para novato:** empezá con **2–3 chats** máximo: uno **general** (`el-practi`), uno **web** si tocás el sitio a menudo, uno **leads** si metés lotes a Notion. Sumá **analista** cuando tengas sesiones largas de análisis. **eljefe** usalo cada tanto (revisión semanal), no hace falta chat diario.

Los “subagentes” son **skills**: no aparecen como usuarios aparte; vos **nombrás el rol** y Cursor carga esa guía.

## Roles (skills) — mapa oficial


| Rol                        | Skill `name` | Cuándo usarlo                                                                        |
| -------------------------- | ------------ | ------------------------------------------------------------------------------------ |
| Generalista                | `el-practi`  | Dudas amplias, alcance, prioridades, mezcla de temas                                 |
| Sitio web                  | `web`        | Next en `data-driven/`, UI, build, SEO estático                                      |
| Leads + Notion             | `leads`      | Recolección, validación, lotes, scripts OSM → Notion                                 |
| Creatividad social y decks | `creativa`   | Instagram, LinkedIn, presentaciones, copy creativo                                   |
| Excel                      | `excel`      | Modelos, limpieza, plantillas, convenciones de hojas                                 |
| Power BI                   | `powerbi`    | Modelo, DAX, informes, rendimiento                                                   |
| Analista / deep dives      | `analista`   | Preguntas de negocio, métricas, calidad de datos, hipótesis, resúmenes estructurados |
| Dirección                  | `eljefe`     | Ideas de crecimiento, coherencia entre roles, “¿vamos bien?”                         |


## Mapa rápido (archivos)


| Tipo de tarea                         | Dónde mirar                          | Skill + rules                                                        |
| ------------------------------------- | ------------------------------------ | -------------------------------------------------------------------- |
| Sitio                                 | `data-driven/`                       | `web` + `data-driven-next`                                           |
| Leads / Python en este repo           | `leads/**/*.py` si existe            | `leads` + `data-driven-leads` + reglas workspace                     |
| Leads / repo externo                  | Workspace `leads-notion` u otro      | `leads` + mismas reglas de calidad                                   |
| Marca / ICP                           | `docs/data-driven/`                  | Lectura directa + `creativa` o `eljefe` según tarea                  |
| Análisis profundo, definición de KPIs | Datos que pegues o archivos del repo | `analista` (+ `excel` / `powerbi` si el entregable es hoja o modelo) |


## Documentación

- [docs/data-driven/brand-voice.md](docs/data-driven/brand-voice.md)
- [docs/data-driven/icp.md](docs/data-driven/icp.md)

## Convenciones

- Rules: `.cursor/rules/` (`data-driven-core` siempre; Next bajo `data-driven/`**).
- Skills: `.cursor/skills/<rol>/SKILL.md`.

## Skills que suelen faltar después (añadir cuando escalés)


| Rol sugerido         | Para qué                                                           |
| -------------------- | ------------------------------------------------------------------ |
| `automatizacion`     | n8n, Make, webhooks, ETL liviano, orquestación sin PBI             |
| `clientes`           | SOW, entregables, actas, alcance de proyecto (sin ser legal)       |
| `looker` o `dataviz` | Looker Studio / reporting si lo vendés aparte de PBI               |
| `legal-lite`         | Privacidad, cookies, textos legales del sitio (con abogado humano) |
| `finanzas`           | Precios, paquetes, margen objetivo (datos internos en doc aparte)  |


No hace falta crearlos todos hoy: sumá uno cuando tengas **3+ tareas repetidas** en esa área.

## Qué sigue (orden recomendado)

1. **Usar los roles en chats distintos** — un hilo `web`, otro `leads`, etc., para no mezclar contexto.
2. **Documentar 1 página** `docs/data-driven/playbook-creativa.md` (calendario, hashtags, límites) cuando empieces a publicar seguido; después enlazala desde `creativa/SKILL.md`.
3. **Carpeta de plantillas** — p. ej. `templates/excel/` o `templates/decks/` y una línea en skills `excel` / `creativa` con la ruta real.
4. **Métricas internas para `eljefe`** — archivo mínimo `docs/data-driven/metricas-internas.md` (aunque sea placeholders) para que el rol no invente KPIs.
5. **Skills opcionales** de la tabla de arriba solo cuando el volumen lo justifique.

