// src/models/UserModel.ts
import { poolPromise } from '../utils/db';
import sql from 'mssql';

export class UserModel {
    static async findByEmail(email: string) {
        const pool = await poolPromise;
        const result = await pool!.request()
            .input('Email', sql.NVarChar, email)
            .query('SELECT * FROM Users WHERE Email = @Email');
        
        return result.recordset[0]; // Returns the user object or undefined
    }

    // You can add a `create` method here later for Registration!
}