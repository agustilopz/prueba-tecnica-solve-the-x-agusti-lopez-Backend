// (Antes se instalaron los packages y dependencias necesarios con npm install)
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Permitir el uso de async y await con sqlite
sqlite3.verbose();

// Creamos una conexión reutilizable que devuelve una promesa
const dbPromise = open({
  filename: path.join(__dirname, '../data/database.sqlite'),
  driver: sqlite3.Database,
});

export default dbPromise;
