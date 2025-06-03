/**
 * Servicio de productos.
 * 
 * Proporciona funciones para interactuar con la base de datos de productos:
 * - getAllProducts: Obtiene todos los productos ordenados por nombre.
 * - getProductById: Obtiene un producto por su ID.
 * - createProduct: Inserta un nuevo producto en la base de datos.
 * - updateProduct: Actualiza un producto existente.
 * - deleteProduct: Elimina un producto por su ID.
 * 
 * Todas las funciones usan la conexión SQLite asíncrona.
 */
import dbPromise from '../config/db';

/**
 * Obtiene todos los productos ordenados por nombre.
 * @returns {Promise<Array>} Lista de productos.
 */
export const getAllProducts = async () => {
    const db = await dbPromise;
    const result = await db.all('SELECT * FROM products ORDER BY products.name');
    return result;
};

/**
 * Obtiene un producto por su ID.
 * @param id - ID del producto.
 * @returns {Promise<Object|null>} Producto encontrado o null.
 */
export const getProductById = async (id: string) => {
    const db = await dbPromise;
    const numericId = Number(id); // Convierte el id a número
    const result = await db.get('SELECT * FROM products WHERE id = ?', [numericId]);
    return result;
}

/**
 * Crea un nuevo producto.
 * @param data - Objeto con los campos: name, price, description, image, cat_id.
 * @returns {Promise<Object>} Mensaje de éxito o error.
 */
export const createProduct = async (data: any) => {
    try {
        const { name, price, description, image, cat_id } = data;
        const db = await dbPromise;
        await db.run(
            'INSERT INTO products (name, price, description, image, cat_id) VALUES (?, ?, ?, ?, ?)',
            [name, price, description, image, cat_id]
        );

        return { success: "Producto añadido correctamente" }
    } catch (err) {
        return { error: "Error al añadir el producto" }
    }

};

/**
 * Actualiza un producto existente.
 * @param id - ID del producto.
 * @param data - Objeto con los campos a actualizar: name, price, description, image, cat_id.
 * @returns {Promise<Object>} Mensaje de éxito o error.
 */
export const updateProduct = async (id: string, data: any) => {
    try {
        const { name, price, description, image, cat_id } = data;
        const db = await dbPromise;
        await db.run(
            'UPDATE products SET name = ?, price = ?, description = ?, image = ?, cat_id = ? WHERE id = ?',
            [name, price, description, image, cat_id, id]
        );

        return { success: "Producto añadido correctamente" }
    } catch (err) {
        return { error: "Error al añadir el producto" }
    }
};

/**
 * Elimina un producto por su ID.
 * @param id - ID del producto.
 * @returns {Promise<Object>} Mensaje de éxito o error.
 */
export const deleteProduct = async (id: string) => {
    try {
        const db = await dbPromise;
        await db.run(
            'DELETE FROM products WHERE id = ?', [id]
        );

        return { success: "Producto eliminado correctamente" }

    } catch (err) {
        return { error: "No se ha podido eleiminar el producto" }
    }
}