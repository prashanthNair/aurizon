import { Request, Response, NextFunction } from "express"; 
import { ParentalController } from "../controllers/parentalFacilityController";

const parentalFacilityRoutes = (app, parentalFacilityController: ParentalController = ParentalController.getInstance()) => {

    app.route('/api/v1/Facilities')
        .get(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await parentalFacilityController.getAllParentalFacility(req, res, next)
        )

    app.route('/api/v1/Facilities/:facilityName')
        .get(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await parentalFacilityController.getFacilityDetails(req, res, next)
        )

        app.route('/api/v1/facilities/:facilityName/review/:id')
        .get(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await parentalFacilityController.findAllReviews(req, res, next)
        )
        .post(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await parentalFacilityController.createReview(req, res, next)
        )
}

export default parentalFacilityRoutes;
