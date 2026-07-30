# Guía de Desarrollo Local con Emuladores (AZLAB)

Esta guía explica paso a paso cómo correr el sitio web (Next.js) y el backend de Firebase localmente mediante los emuladores oficiales de Firebase.

---

## 📋 Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu máquina:

1. **Node.js** (versión 20 o superior recomendado).
2. **Java JDK** (versión 11 o superior). Requerido para correr los emuladores de Firebase (Firestore).
3. **pnpm** o **npm** para instalar dependencias.

---

## 🗂️ Estructura de Directorios

Para que esta configuración funcione sin modificar las rutas relativas de los scripts, se asume que ambos repositorios están clonados como carpetas hermanas en tu escritorio u otra ruta común:

```text
📁 Desktop/
   ├── 📁 azlab-website/             # Repositorio Frontend (Next.js)
   └── 📁 azalab-backend-firebase/   # Repositorio Backend (Firebase Functions & Firestore)
```

---

## 🚀 Paso a Paso

### 1. Levantar el Backend (Firebase Emulator)

Abre una terminal nueva y dirígete al repositorio del backend:

```bash
cd ../azalab-backend-firebase
```

#### A. Iniciar los Emuladores
Arranca los servicios locales de base de datos (Firestore) y las funciones de la API (Cloud Functions):

```bash
npx firebase-tools emulators:start --only functions,firestore --import functions/emulator-data
```
*   **Firestore** estará disponible en el puerto `8080`.
*   **Functions (API)** estará disponible en el puerto `5001`.
*   La consola web del emulador estará disponible en `http://localhost:4000`.

#### B. Sembrar la Base de Datos (Seeding)
La primera vez que levantes el emulador (o si lo inicias limpio), la colección estará vacía. Abre **otra pestaña de la terminal** y corre el script local para poblar la base de datos local con los productos y categorías:

```bash
cd ../azalab-backend-firebase
node functions/seed-local.js
```
*Este comando cargará los 39 exámenes médicos de prueba directamente en el Firestore local.*

---

### 2. Configurar y Correr el Frontend (Next.js)

Regresa a la terminal del proyecto de la web (`azlab-website`):

```bash
cd ../azlab-website
```

#### A. Configurar Variables de Entorno
Asegúrate de que tu archivo `.env.local` apunta al endpoint local de tu emulador:

```env
# URL para pruebas locales (Firebase Emulator)
NEXT_PUBLIC_API_URL=http://127.0.0.1:5001/azlab-9dae3/us-central1/api
```

#### B. Instalar Dependencias y Correr
Instala los paquetes necesarios y arranca el servidor Next.js en modo desarrollo:

```bash
pnpm install
pnpm dev
```
*   La web estará disponible en `http://localhost:3000`.

---

## 🛠️ Resolución de Problemas Comunes

### 🔴 Error: `Could not start Firestore Emulator, port taken`
Si al levantar los emuladores te da este error, significa que una instancia previa no se cerró bien y sigue ocupando el puerto `8080`. 

**Solución en Mac/Linux:**
1. Encuentra el ID del proceso (PID) que usa el puerto `8080`:
   ```bash
   lsof -i tcp:8080
   ```
2. Cierra el proceso usando su PID (por ejemplo, si el PID es `43998`):
   ```bash
   kill -9 43998
   ```
3. Vuelve a iniciar los emuladores.
