This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy con Firebase Hosting

Este proyecto está configurado para exportación estática y deploy automático en Firebase Hosting.

### Requisitos previos

1. **Firebase CLI instalado globalmente:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Autenticación en Firebase:**
   ```bash
   firebase login
   ```

3. **Proyecto Firebase configurado:**
   - Este proyecto usa el ID: `data-driven-consulting`
   - Para cambiar el proyecto, edita `.firebaserc` y reemplaza el valor de `"default"`

### Comandos de deploy

**Deploy completo (build + deploy):**
```bash
npm run deploy:firebase
```

**O paso por paso:**
```bash
# 1. Generar build estático (crea carpeta /out)
npm run build:static

# 2. Deploy a Firebase
firebase deploy
```

### Notas importantes

- **Build estático:** El comando `npm run build:static` genera la carpeta `/out` con todos los archivos estáticos.
- **Cambios incrementales:** Solo necesitas ejecutar `npm run deploy:firebase` para actualizar el sitio.
- **Configuración:** El archivo `firebase.json` apunta a la carpeta `out/` como directorio público.
- **Sitemap:** Se genera automáticamente en cada build con `next-sitemap`.

### Ver el sitio desplegado

Después del deploy, Firebase te mostrará la URL de tu sitio:
```
https://data-driven-consulting.web.app
```

## Deploy alternativo en Vercel

También puedes usar [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de deployment de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
