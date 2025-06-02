import { Router } from 'express';
import { authenticateJWT } from '../middleware/authMiddleware';


import * as productController from '../controllers/product.controller';

const router = Router();


router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

/*
router.get('/', authenticateJWT, productController.getAllProducts);
router.get('/:id', authenticateJWT, productController.getProductById);
*/

router.post('/', authenticateJWT, productController.createProduct);
router.put('/:id', authenticateJWT, productController.updateProduct);
router.delete('/:id', authenticateJWT, productController.deleteProduct);
/*
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
*/

export default router;