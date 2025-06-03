/**
 * Controlador de productos.
 * Gestiona las operaciones CRUD sobre productos y aplica la lógica de negocio (precio con IVA).
 * 
 * Endpoints gestionados:
 * - GET    /products           -> getAllProducts
 * - GET    /products/:id       -> getProductById
 * - POST   /products           -> createProduct
 * - PUT    /products/:id       -> updateProduct
 * - DELETE /products/:id       -> deleteProduct
 * 
 * Lógica de negocio:
 * - Al devolver productos, añade el campo 'price_with_iva' (precio con 21% de IVA).
 */
import { Request, Response } from 'express';
import * as productService from '../services/product.service';

/**
 * Obtiene todos los productos.
 * Añade el campo 'price_with_iva' a cada producto.
 * 
 * @route GET /products
 * @returns {Array} Lista de productos con precio e IVA.
 */
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();

    // Lógica de negocio: añadir campo 'price_with_iva' al devolver cada producto
    const productsWithIVA = products.map((product) => ({
      ...product,
      price_with_iva: (product.price * 1.21).toFixed(2), 
    }));

    res.json(productsWithIVA);
  } catch (err) {
    res.status(500).json({ error: 'Error al recuperar los productos' });
  }
};

/**
 * Obtiene un producto por su ID.
 * Añade el campo 'price_with_iva' al producto.
 * 
 * @route GET /products/:id
 * @param {string} id - ID del producto
 * @returns {Object} Producto con precio e IVA, o error 404 si no existe.
 */
export const getProductById = async (req: Request, res: Response) => {
    try {
                console.log('ID recibido:', req.params.id);

        const id = req.params.id; 
        const product = await productService.getProductById(id);
       if (product) {
  res.json({
    ...product,
    price_with_iva: (product.price * 1.21).toFixed(2),
  });
} else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al recuperar el producto' });
    }
    
}

/**
 * Crea un nuevo producto.
 * 
 * @route POST /products
 * @body { name, price, description, image, cat_id }
 * @returns {Object} Mensaje de éxito o error.
 */
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

/**
 * Actualiza un producto existente.
 * 
 * @route PUT /products/:id
 * @param {string} id - ID del producto
 * @body { name, price, description, image, cat_id }
 * @returns {Object} Mensaje de éxito o error.
 */
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


/**
 * Elimina un producto por su ID.
 * 
 * @route DELETE /products/:id
 * @param {string} id - ID del producto
 * @returns {Object} Mensaje de éxito o error.
 */
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