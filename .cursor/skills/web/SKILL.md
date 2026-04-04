---
name: web
description: Use when the user invokes the web role or edits the Data Driven marketing site in data-driven/ (Next.js App Router, static export, Tailwind, legal pages). Use for UI, SEO static assets, sitemap, build, preview, deploy runbooks.
---

# web — Sitio (`data-driven/`)

- **Raíz de la app:** `data-driven/` (repo raíz `data_driven`).
- **Stack:** Next.js 15, React 19, `data-driven/src/app/`, Tailwind 4.
- **Export estático:** `output: 'export'` en `next.config.ts` → carpeta `out/`. No asumir APIs de servidor sin validar export.
- **Marca:** [docs/data-driven/brand-voice.md](../../../docs/data-driven/brand-voice.md).

## Comandos (cwd: `data-driven/`)

`npm run dev` · `npm run lint` · `npm run build` · `npm run preview`

## Rutas útiles

`src/app/page.tsx`, `privacidad/page.tsx`, `terminos/page.tsx`, `layout.tsx`, `public/`.

## Checklist

Lint + build tras cambios relevantes; accesibilidad básica; verificación visual con navegador si el usuario lo pide.
