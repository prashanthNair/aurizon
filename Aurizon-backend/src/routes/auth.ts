import {Request, Response, NextFunction} from "express";
import { AuthController } from "../controllers/authController";

const authRoutes = (app, authController: AuthController = AuthController.getInstance()) => {

    app.route('/api/v1/auth')
        .post(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await authController.login(req, res,next)
        )

        app.route('/api/v1/auth/create')
        .post(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await authController.postUser(req, res,next)
        )
}

export default authRoutes;