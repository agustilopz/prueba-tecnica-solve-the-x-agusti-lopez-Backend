/**
 * Configuración principal de la aplicación Express.
 * 
 * - Inicializa la app de Express.
 * - Aplica middlewares globales: CORS y parseo de JSON.
 * - Define las rutas principales para productos y autenticación.
 * 
 * Rutas:
 * - /products -> Gestiona productos (CRUD)
 * - /auth     -> Autenticación de usuarios (login)
 * 
 * Exporta la instancia de la aplicación para ser utilizada por el servidor.
 */

import express from 'express';
import productRoutes from './routes/products.routes';
import cors from 'cors';
import authRoutes from './routes/auth';


const app = express();

app.use(cors()); // Permite todas las conexiones CORS, también puedes configurar opciones más restrictivas
app.use(express.json()); // Middleware para parsear JSON
app.use('/products', productRoutes); // Todas las rutas bajo /products
app.use('/auth', authRoutes);

export default app;