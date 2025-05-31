import { Router } from 'express';

import * as productController from '../controllers/product.controller';

const router = Router();

router.get('/', productController.getAllProducts);

router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;