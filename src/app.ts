
// Importamos la función de connexión a la bbdd
import { connectDB } from './config/db';

// Función para consultas a la bbdd
const init = async () => {
    // Connexión a la bbdd (la primera vez se crea el fichero database.sqlite)
    const db = await connectDB();

    /*
    // Insert
    await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [
    'Juan',
    'juan@example.com']);

    // Read
    const users = await db.all('SELECT * FROM users');
    console.log(users);
    */

};

init();