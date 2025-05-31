import dbPromise from './db';


export const initDB = async () => {
    const db = await dbPromise;

    // Crear tablas si no existen
    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      type TEXT CHECK (type IN ('admin', 'user', 'guest'))
    )
      `);

    await db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL
    )
      `);

    await db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    cat_id INTEGER,
    FOREIGN KEY (cat_id) REFERENCES categories(id)
  )
`);

  const users = await db.all('SELECT * FROM users');
  console.log(users);


};


initDB();

