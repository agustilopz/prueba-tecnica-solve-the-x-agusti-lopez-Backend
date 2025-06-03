# Prueba Técnica SolveTheX - Backend

Este repositorio contiene el backend de la prueba técnica para SolveTheX. Se trata de una API REST desarrollada en **Node.js** y **TypeScript**, que utiliza **SQLite** como base de datos local y **JSON Web Token (JWT)** para autenticación.

## Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Endpoints principales](#endpoints-principales)
- [Autenticación](#autenticación)
- [Lógica de negocio](#lógica-de-negocio)
- [Testing](#testing)
- [Notas importantes](#notas-importantes)
- [Estructura del proyecto](#estructura-del-proyecto)

---

## Características

- API RESTful con endpoints para productos y autenticación.
- Base de datos local SQLite.
- Autenticación mediante JWT.
- Lógica de negocio: cálculo de precio con IVA.
- Test unitario con Jest.
- Código en TypeScript.
- Uso de linters recomendado.

## Requisitos

- Node.js >= 18
- npm >= 9

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPO>
   cd <NOMBRE_DEL_REPO>
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicializa la base de datos y siembra los datos:
   ```sh
   npx ts-node src/config/initDB.ts
   npx ts-node src/seed/seedData.ts
   ```

## Ejecución

Para iniciar el servidor en modo desarrollo:
```sh
npx ts-node src/server.ts
```
El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

## Endpoints principales

- `POST /auth/login`: Login de usuario, devuelve un JWT.
- `GET /products`: Lista todos los productos.
- `GET /products/:id`: Obtiene un producto por ID.
- `POST /products`: Crea un nuevo producto.
- `PUT /products/:id`: Actualiza un producto existente.
- `DELETE /products/:id`: Elimina un producto.

> **Nota:** Los endpoints de creación, actualización y borrado pueden protegerse con autenticación JWT (ver comentarios en `src/routes/products.routes.ts`).

## Autenticación

- Para acceder a endpoints protegidos, incluye el header:
  ```
  Authorization: Bearer <token>
  ```
- El token se obtiene al hacer login en `/auth/login`.

## Lógica de negocio

- Al consultar productos, la API añade el campo `price_with_iva`, que representa el precio con un 21% de IVA aplicado.  
  Implementado en `controllers/product.controller.ts`.

## Testing

Para ejecutar los tests unitarios:
```sh
npm test
```
El test principal comprueba el cálculo del precio con IVA.

## Notas importantes

- El proyecto utiliza variables de entorno para el secreto JWT. **No uses valores hardcodeados en producción.**
- El esquema de la base de datos se crea automáticamente al iniciar el proyecto.
- Puedes modificar o ampliar los datos iniciales en `src/seed/seedData.ts`.
- El frontend debe consumir estos endpoints para mostrar, insertar, actualizar y eliminar productos.

## Estructura del proyecto

```
src/
  app.ts                # Configuración principal de Express
  server.ts             # Arranque del servidor
  config/
    db.ts               # Conexión a SQLite
    initDB.ts           # Inicialización de tablas
  controllers/
    product.controller.ts
  routes/
    products.routes.ts
    auth.ts
  middleware/
    authMiddleware.ts   # Middleware JWT
  services/
    product.service.ts
    auth.service.ts
  seed/
    seedData.ts         # Datos iniciales
```