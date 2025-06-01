import express from 'express';
import productRoutes from './routes/products.routes';
import cors from 'cors';

const app = express();

app.use(cors()); // Permite todas las conexiones CORS, también puedes configurar opciones más restrictivas
app.use(express.json()); // Middleware para parsear JSON
app.use('/products', productRoutes); // Todas las rutas bajo /products

export default app;