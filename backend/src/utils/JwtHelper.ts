// src/utils/JwtHelper.ts
import jwt from 'jsonwebtoken';

export class JwtHelper {
    static sign(payload: object): string {
        return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '12h' });
    }
    static verify(token: string): any {
        return jwt.verify(token, process.env.JWT_SECRET!);
    }
}