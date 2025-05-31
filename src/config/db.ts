// (Antes se instalaron los packages y dependencias necesarios con npm install)
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs';

// Permitir el uso de async y await con sqlite
sqlite3.verbose();

export const connectDB = async () => {
    const db = await open({
        filename: path.join(__dirname, '../data/database.sqlite'), // Ruta en la que se guardará la base de datos creada
        driver: sqlite3.Database
    });

    // Creamos las tablas de la bbdd
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

    return db;

};