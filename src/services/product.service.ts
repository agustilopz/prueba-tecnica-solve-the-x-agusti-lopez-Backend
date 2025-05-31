import dbPromise from '../config/db';

export const getAllProducts = async () => {
    const db = await dbPromise;
    const result = await db.all('SELECT * FROM products ORDER BY name');
    return result;
}