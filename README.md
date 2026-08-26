# 🧪 AZLAB Healthcare — Frontend Web

Plataforma web oficial de **AZLAB Healthcare**, laboratorio clínico en Santa Ana, El Salvador. Permite consultar catálogo de exámenes, cotizar servicios, verificar cobertura a domicilio y agendar citas médicas con confirmación vía WhatsApp.

---

## 📖 Documentación Completa

Para una guía técnica detallada de la arquitectura, reglas de negocio, flujos de agendamiento y componentes, consulta el archivo maestro:

👉 **[DOCUMENTACION.md](./DOCUMENTACION.md)**

Otras guías disponibles:
*   **[LOCAL_SETUP.md](./LOCAL_SETUP.md)**: Guía paso a paso para desarrollo local con los emuladores de Firebase.
*   **[api-documentation.md](./api-documentation.md)**: Especificación de endpoints y ejemplos de peticiones cURL a la API.

---

## 🚀 Inicio Rápido

### 1. Clonar e instalar dependencias
```bash
git clone <URL_DEL_REPOSITORIO>
cd azlab-website
pnpm install
```

### 2. Variables de entorno
Crea un archivo `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://us-central1-azlab-9dae3.cloudfunctions.net/api
```

### 3. Iniciar el servidor de desarrollo
```bash
pnpm dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🛠️ Stack Tecnológico

*   **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
*   **Librería UI:** [React 19](https://react.dev/)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Iconos:** [Material Symbols Outlined](https://fonts.google.com/icons)

---

## 📦 Scripts Disponibles

*   `pnpm dev` — Inicia el servidor de desarrollo en `http://localhost:3000`.
*   `pnpm build` — Compila y optimiza el proyecto para producción.
*   `pnpm start` — Inicia el servidor en modo producción.
*   `pnpm lint` — Ejecuta ESLint para verificar calidad del código.

---

© AZLAB Healthcare — Todos los derechos reservados.
