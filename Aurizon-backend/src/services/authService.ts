
import { User } from "../models/user";
import { IAuthService } from "./IAuthService";
import { Document } from "mongoose";
import { db } from "../configuration/db.config";

class AuthService implements IAuthService {

    private constructor() { }

    private static instance: IAuthService = null;

    static getInstance() {

        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    public async postUser(userData: User): Promise<User> {
        let user: User = {
            email: userData.email,
            password: userData.password, 
            isActive: userData.isActive

        };
        return await db.query("INSERT INTO user set ?", user); 
    }

    public async login(email: string, password: string): Promise<User> {
        try {
            const [rows, fields] = await db.query("SELECT email from user where email = ? ", email);
            return <User>rows;
        } catch (errpr) {
            return null;
        }

    }
}

export { AuthService }

