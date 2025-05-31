import {Request, Response} from 'express';
import * as productService from '../services/product.service';

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Error al recuperar los productos' });
    }

};