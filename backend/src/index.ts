// src/index.ts
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { AuthController } from './controllers/AuthController';

const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Allow Next.js frontend
app.use(express.json());
app.use(cookieParser()); // Allows reading req.cookies

// Routes
app.post('/api/login', AuthController.login);

// Start Server
app.listen(8080, () => {
    console.log(`Server running on http://localhost:8080`);
});