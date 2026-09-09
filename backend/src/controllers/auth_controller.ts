// src/controllers/AuthController.ts
import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';
import { PasswordHelper } from '../utils/PasswordHelper';
import { JwtHelper } from '../utils/JwtHelper';

export class AuthController {
    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            // 1. Find User
            const user = await UserModel.findByEmail(email);
            if (!user) return res.status(401).json({ error: "User not found" });

            // 2. Verify Password
            const isValid = await PasswordHelper.verify(password, user.PasswordHash);
            if (!isValid) return res.status(401).json({ error: "Invalid password" });

            // 3. Generate Token
            const token = JwtHelper.sign({ userId: user.UserId, username: user.Username });

            // 4. Set HttpOnly Cookie (Security First!)
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 12 * 60 * 60 * 1000 // 12 hours
            });

            return res.status(200).json({ message: "Login successful" });
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}