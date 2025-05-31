import express from 'express';
import productRoutes from './routes/products.routes';

const app = express();

app.use(express.json()); // Middleware para parsear JSON
app.use('/products', productRoutes); // Todas las rutas bajo /products

export default app;