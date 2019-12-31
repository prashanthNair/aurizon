import {Request, Response, NextFunction} from "express";
import { HomeController } from "../controllers/homeController";

const homeRoutes = (app, homeController: HomeController = HomeController.getInstance()) => {

    app.route('/api/v1/home')
        .get(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await homeController.getAllFacility(req, res,next)
        )
}

export default homeRoutes;
