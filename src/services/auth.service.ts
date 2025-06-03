/**
 * Servicio de autenticación JWT.
 * 
 * Proporciona funciones para generar y verificar tokens JWT.
 * 
 * - generateToken: Genera un token JWT a partir de un payload.
 * - verifyToken: Verifica la validez de un token JWT.
 * 
 * Nota: Usa una variable de entorno para el secreto en producción.
 */
import jwt from 'jsonwebtoken';

const SECRET = 'tu_clave_secreta'; // Usa una variable de entorno en producción

/**
 * Genera un token JWT con el payload proporcionado.
 * @param payload - Información a incluir en el token.
 * @returns {string} Token JWT firmado.
 */
export const generateToken = (payload: object) => {
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
};

/**
 * Verifica la validez de un token JWT.
 * @param token - Token JWT a verificar.
 * @returns {object | string} Payload decodificado si es válido, error si no.
 */
export const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET);
};