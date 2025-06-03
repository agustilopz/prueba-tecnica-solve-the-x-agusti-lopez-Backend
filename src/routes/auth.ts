/**
 * Rutas de autenticación para la API.
 * 
 * Proporciona el endpoint para login de usuarios, devolviendo un JWT si las credenciales son válidas.
 * 
 * Endpoints:
 * - POST /auth/login: Autenticación de usuario.
 * 
 * Funcionamiento:
 * - Recibe username y password en el body.
 * - Busca el usuario en la base de datos.
 * - Verifica la contraseña usando bcrypt.
 * - Si es correcto, genera y devuelve un token JWT.
 * - Si no, responde con error 401.
 */
import { Router } from 'express';
import { generateToken } from '../services/auth.service';
import bcrypt from 'bcryptjs';
import dbPromise from '../config/db'; // Asegúrate de importar tu conexión a la base de datos


const router = Router();

// Ejemplo simple para testear
const users = [
    { id: 1, username: 'admin', password: bcrypt.hashSync('1234', 8) }
];


/**
 * @route POST /auth/login
 * @body { username, password }
 * @returns {Object} { token } si es correcto, o error 401 si no.
 */
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const db = await dbPromise;
    const user = await db.get('SELECT * FROM users WHERE username = ?', [username]);
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken({ id: user.id, username: user.username });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

export default router;
