import { Router } from 'express';
import { generateToken } from '../services/auth.service';
import bcrypt from 'bcryptjs';
import dbPromise from '../config/db'; // Asegúrate de importar tu conexión a la base de datos


const router = Router();

// Ejemplo simple, deberías consultar tu base de datos real
const users = [
    { id: 1, username: 'admin', password: bcrypt.hashSync('1234', 8) }
];

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const db = await dbPromise;
    const user = await db.get('SELECT * FROM users WHERE username = ?', [username]);
    //const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken({ id: user.id, username: user.username });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

export default router;
