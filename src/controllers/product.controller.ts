import { Request, Response } from 'express';
import * as productService from '../services/product.service';

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Error al recuperar los productos' });
    }

};

export const getProductById = async (req: Request, res: Response) => {
    try {
                console.log('ID recibido:', req.params.id); // <-- Añade este log

        const id = req.params.id; // ID del producto desde la URL
        const product = await productService.getProductById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al recuperar el producto' });
    }
}


export const createProduct = async (req: Request, res: Response) => {
    try {
        const result = await productService.createProduct(req.body);
        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (err) {
        res.status(500).json({ error: 'Error interno' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
    const id = req.params.id;       // ID del producto desde la URL
    const data = req.body;          // Datos a actualizar desde el body
    const result = await productService.updateProduct(id, data);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(400).json(result);
    }
}catch (err) {
    res.status(500).json({ error: 'Error interno' });
}
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
    const id = req.params.id;
    const result = await productService.deleteProduct(id);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(400).json(result);
    }
}catch (err) {
    res.status(500).json({ error: 'Error interno' });
}
};