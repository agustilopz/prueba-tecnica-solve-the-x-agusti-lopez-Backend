import dbPromise from '../config/db';

export const getAllProducts = async () => {
    const db = await dbPromise;
    const result = await db.all('SELECT * FROM products ORDER BY name');
    return result;
};

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