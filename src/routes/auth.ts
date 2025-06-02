import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
const SECRET = 'tu_clave_secreta';

// Usuario de prueba
const user = { id: 1, username: 'test', password: '1234' };

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === user.username && password === user.password) {
        const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

export default router;

/*import { Router } from 'express';
import { generateToken } from '../services/auth.service';
import bcrypt from 'bcryptjs';

const router = Router();

// Ejemplo simple, deberías consultar tu base de datos real
const users = [
    { id: 1, username: 'admin', password: bcrypt.hashSync('1234', 8) }
];

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken({ id: user.id, username: user.username });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

export default router;

*/