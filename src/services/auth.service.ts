import jwt from 'jsonwebtoken';

const SECRET = 'tu_clave_secreta'; // Usa una variable de entorno en producción

export const generateToken = (payload: object) => {
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET);
};