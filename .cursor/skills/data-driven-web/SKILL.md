---
name: data-driven-web
description: Use when editing, building, or deploying the Data Driven marketing site in data-driven/ (Next.js App Router, static export, Tailwind, legal pages). Use for UI changes, SEO static assets, sitemap, or runbooks de preview y build.
---

# Data Driven — Sitio web (`data-driven/`)

## Contexto del proyecto

- **Raíz de la app:** `data-driven/` (no confundir con la raíz del repo `data_driven`).
- **Stack:** Next.js 15, React 19, App Router bajo `data-driven/src/app/`, Tailwind CSS 4.
- **Salida:** `output: 'export'` en `data-driven/next.config.ts` — sitio **estático** (`out/` tras build). No usar APIs de servidor de Next ni rutas dinámicas que requieran servidor sin revisar compatibilidad con export.
- **Imágenes:** `images.unoptimized: true` (adecuado para export).
- **Marca y copy:** Alinear con [docs/data-driven/brand-voice.md](../../../docs/data-driven/brand-voice.md).

## Comandos (desde `data-driven/`)

- Desarrollo: `npm run dev`
- Lint: `npm run lint`
- Build estático + sitemap: `npm run build` o `npm run build:static`
- Preview local del `out/`: `npm run preview` o `npm run start`

## Estructura útil

- Páginas: `src/app/page.tsx`, `src/app/privacidad/page.tsx`, `src/app/terminos/page.tsx`
- Layout global: `src/app/layout.tsx`
- Público: `public/` (robots, sitemap generado, assets)

## Checklist al cambiar UI o rutas

1. Mantener coherencia visual (Tailwind, componentes existentes).
2. Revisar accesibilidad básica (títulos, contraste, foco).
3. Tras cambios relevantes: `npm run lint` y `npm run build` para validar export.
4. Si el usuario pide verificación visual, usar el navegador MCP en la URL local o desplegada.

## Despliegue

- El repo incluye script `deploy:firebase`; puede haber también flujo Vercel según configuración del equipo. No asumir credenciales: usar variables de entorno documentadas en el proyecto.
