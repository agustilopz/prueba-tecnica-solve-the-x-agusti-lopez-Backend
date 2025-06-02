import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = 'tu_clave_secreta';

export function authenticateJWT(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, SECRET);
            (req as any).user = decoded;
            next();
        } catch (err) {
            res.status(401).json({ error: 'Token inválido' });
        }
    } else {
        res.status(401).json({ error: 'Token requerido' });
    }
}

/*
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = 'tu_clave_secreta';

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
*/
