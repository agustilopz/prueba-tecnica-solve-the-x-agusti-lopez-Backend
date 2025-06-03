
/**
 * Middleware de autenticación JWT para Express.
 * 
 * Este middleware verifica la validez del token JWT enviado en el header Authorization.
 * Si el token es válido, añade la información del usuario decodificada al objeto request (req.user)
 * y permite el acceso al siguiente middleware/controlador.
 * Si el token es inválido o no está presente, responde con error 401.
 * 
 * Uso:
 * Añade este middleware a las rutas que requieran autenticación.
 * 
 * Ejemplo:
 *   router.get('/ruta-protegida', authenticateJWT, controlador);
 */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = 'tu_clave_secreta';

/**
 * Verifica el JWT presente en el header Authorization.
 * Si es válido, añade el usuario decodificado a req.user.
 * Si no, responde con 401.
 */
export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, SECRET);
            (req as any).user = decoded;
            next();
        } catch (err) {
            res.status(401).json({ error: 'Token inválido' });
            return
          }
    } else {
        res.status(401).json({ error: 'Token requerido' });
    }
};

