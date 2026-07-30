# AZLAB

API pública de solo lectura para productos y tarifas usando Firebase Functions + Firestore.

## Estructura

- `functions/`: backend serverless
- `functions/src/routes`: rutas HTTP
- `functions/src/services`: acceso a Firestore
- `functions/src/middleware`: rate limit y App Check
- `functions/src/utils`: helpers de respuesta, validación y paginación

## Requisitos

- Node.js 20+
- Firebase CLI
- Proyecto Firebase configurado

## Variables de entorno

Crear archivo:

`functions/.env`

Ejemplo:

```env
ALLOWED_ORIGINS=http://localhost:5173,https://tu-dominio.com
REQUIRE_APP_CHECK=false

se puede llamar a las paginas DESDE LOCAL con
Para ver salud:
curl http://127.0.0.1:5001/azlab-9dae3/us-central1/api/health

para ver nombre EXACTO

PARA VER LA ZONA EXACTAMENTE (consultar en base de datos las existentes)

curl "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/delivery-tariffs/santa-ana-centro__santa-ana-centro"


PARA VER CATEGORIA

Usar `curl --get` con `--data-urlencode` para que funcionen espacios y acentos.
Ejemplos locales por cada categoria:

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Química Sanguínea" \
  --data-urlencode "limit=20"

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Hematología" \
  --data-urlencode "limit=20"

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Coagulación" \
  --data-urlencode "limit=20"

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Coprología" \
  --data-urlencode "limit=20"

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Farmacos y Drogas" \
  --data-urlencode "limit=20"

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Inmunología" \
  --data-urlencode "limit=20"

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Microbiología" \
  --data-urlencode "limit=20"

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Pruebas Especializadas" \
  --data-urlencode "limit=20"

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Pruebas Extranjero" \
  --data-urlencode "limit=20"

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Química Urinaria" \
  --data-urlencode "limit=20"

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Urología" \
  --data-urlencode "limit=20"

Para la siguiente pagina por categoria, copiar literalmente el `pagination.nextCursor`
que devuelve la respuesta anterior:

curl --get "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products" \
  --data-urlencode "category=Química Sanguínea" \
  --data-urlencode "limit=20" \
  --data-urlencode "cursor=PEGAR_NEXT_CURSOR_AQUI"

la lista oficial de categorias esta en xcel enviado por ingeniero

Pagina 1:
curl "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products?page=1&limit=20"

pagina 3:
curl "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products?page=3&limit=20"

pedidos individuales EL ID ESTA EN MAYUSCULA
curl "http://127.0.0.1:5001/azlab-9dae3/us-central1/api/products/AZ01"
---------------------------------------------
---------------------------------------------
---------------------------------------------

DESDE LA PAGINA OFICIAL
lA LOGICA ES LA MISMA POR EJEMPLO:

curl https://us-central1-azlab-9dae3.cloudfunctions.net/api/products/AZ01

curl "https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?page=3&limit=20"

Categoria en produccion:

curl --get "https://us-central1-azlab-9dae3.cloudfunctions.net/api/products" \
  --data-urlencode "category=Química Sanguínea" \
  --data-urlencode "limit=20"

curl --get "https://us-central1-azlab-9dae3.cloudfunctions.net/api/products" \
  --data-urlencode "category=Hematología" \
  --data-urlencode "limit=20"


---------
---------------------
---------------------
Este backend se hizo siguiendo mejores practicas de seguridad para evitar abuso

Seguridad Implementada

Validación de inputs con Zod: Previene inyecciones, tipos incorrectos y valores fuera de rango
Rate Limiting: Protección contra DDoS y scraping (30 req/min por IP)
App Check: Solo clientes autorizados pueden consumir el API
Firebase Admin SDK: Acceso seguro a Firestore sin exponer credenciales
Manejo estandarizado de errores: No filtra información sensible al cliente

Arquitectura
Cliente → Routes → Middlewares → Services → Firestore → Respuesta

Cliente (curl / frontend)
        ↓
Route (products.routes.ts)
        ↓
Middleware (rate limit, app check)
        ↓
Service (products.service.ts)
        ↓
Firestore
        ↓
Respuesta estructurada (sendOk / sendError)


Separación de responsabilidades:

routes/ - Capa HTTP y validación
services/ - Lógica de negocio (independiente de HTTP)
utils/ - Helpers reutilizables

Services principales:

products.service.ts: Gestión de exámenes (paginación, búsqueda por ID)
tariffs.service.ts: Gestión de tarifas de envío (filtros por distrito/jurisdicción)

Stack

- TypeScript + Zod
- Express + Cloud Functions (2nd Gen)
- Firestore
- Arquitectura REST escalable
- Preparado para producción



-------
para correr la aplicacion primero hay que guardar el serviceaccount de google a variable ENV

export GOOGLE_APPLICATION_CREDENTIALS="/ruta/segura/azlab-service-account.json"

firebase use azlab-9dae3

usar solo funciones
firebase emulators:start --only functions,firestore --import functions/emulator-data

en otra terminal hay que copiar la baase de datos para probar
# desde raíz
npx ts-node functions/scripts/seed-emulator.ts

--

EXCEL CON DATOS, CATEGORIAS Y OTROS DATOS IMPORTANTES
https://docs.google.com/spreadsheets/d/1AHu6uzKbJxs6lNwvGcHD_xsiEJNCfS48XoQJuDgQmM8/edit?usp=sharing
firebase deploy --only functions:api

URLs de produccion por categoria verificadas:

Quimica Sanguinea:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Qu%C3%ADmica+Sangu%C3%ADnea&limit=20

Hematologia:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Hematolog%C3%ADa&limit=20

Coagulacion:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Coagulaci%C3%B3n&limit=20

Coprologia:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Coprolog%C3%ADa&limit=20

Farmacos y Drogas:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Farmacos+y+Drogas&limit=20

Inmunologia:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Inmunolog%C3%ADa&limit=20

Microbiologia:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Microbiolog%C3%ADa&limit=20

Pruebas Especializadas:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Pruebas+Especializadas&limit=20

Pruebas Extranjero:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Pruebas+Extranjero&limit=20

Quimica Urinaria:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Qu%C3%ADmica+Urinaria&limit=20

Urologia:
https://us-central1-azlab-9dae3.cloudfunctions.net/api/products?category=Urolog%C3%ADa&limit=20
```
