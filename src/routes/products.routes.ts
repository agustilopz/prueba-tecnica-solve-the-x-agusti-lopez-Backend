/**
 * Rutas de productos para la API.
 * 
 * Define los endpoints CRUD para la gestión de productos.
 * 
 * Endpoints:
 * - GET    /products           -> Lista todos los productos
 * - GET    /products/:id       -> Obtiene un producto por ID
 * - POST   /products           -> Crea un nuevo producto
 * - PUT    /products/:id       -> Actualiza un producto existente
 * - DELETE /products/:id       -> Elimina un producto
 * 
 * Seguridad:
 * - Puedes proteger los endpoints con autenticación JWT descomentando las líneas correspondientes.
 *   Ejemplo:
 *     router.get('/', authenticateJWT, productController.getAllProducts);
 * 
 * Controladores usados:
 * - productController.getAllProducts
 * - productController.getProductById
 * - productController.createProduct
 * - productController.updateProduct
 * - productController.deleteProduct
 */

import { Router } from 'express';
import { authenticateJWT } from '../middleware/authMiddleware';
import * as productController from '../controllers/product.controller';

const router = Router();

// Endpoints públicos (pueden protegerse con JWT descomentando las líneas de abajo)
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
/*
router.get('/', authenticateJWT, productController.getAllProducts);
router.get('/:id', authenticateJWT, productController.getProductById);
*/


router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
/*
router.post('/', authenticateJWT, productController.createProduct);
router.put('/:id', authenticateJWT, productController.updateProduct);
router.delete('/:id', authenticateJWT, productController.deleteProduct);
*/

export default router;