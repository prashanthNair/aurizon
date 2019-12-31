import { Request, Response, NextFunction } from 'express';
import { IParentalFacilityService } from '../services/IParentalFacilityService';
import { ParentalFacilityService } from '../services/parentalFacilityService';
import { HttpResponseMessage } from '../utils/httpResponseMessage';
import Logger from '../utils/logger';

export class ParentalController {

    private constructor() {
    }

    private static instance: ParentalController = null;
    private parentalService = null;

    /**
    * To get singleton instance
    * 
    * @param  {object} parentalService 
    */
    public static getInstance(parentalService: IParentalFacilityService = ParentalFacilityService.getInstance()) {

        if (!ParentalController.instance) {
            ParentalController.instance = new ParentalController();
        }
        ParentalController.instance.parentalService = parentalService; // mock service Object is passed as a param from .spec
        return ParentalController.instance;
    }


    /**
    * fetch all parental facilities
    * 
    * @param  {object}   req
    * @param  {object}   res
    * @param  {function} next
    */
    public async getAllParentalFacility(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.parentalService.findAllFacility();
            if (!result) {
                HttpResponseMessage.notFoundResponse(res, "No Record Found");
            } else {
                HttpResponseMessage.successResponseWithData(res, "Sucess", result);

            }
        } catch (err) {
            Logger.error("Error", err)
            HttpResponseMessage.ErrorResponse(res, err)
        }
    }

    /**
    * fetch all parental facility details
    * 
    * @param  {object}   req
    * @param  {object}   res
    * @param  {function} next
    */
    public async getFacilityDetails(req: Request, res: Response, next: NextFunction) {
        try { 
            const result = await this.parentalService.findFacilityDetails(req.params.facilityName);
            if (!result) {
                HttpResponseMessage.notFoundResponse(res, "No Record Found");
            } else {
                HttpResponseMessage.successResponseWithData(res, "Sucess", result);

            }
        } catch (err) { 
            HttpResponseMessage.ErrorResponse(res, err)
        }

    }

    /**
    * fetch all review details
    * 
    * @param  {object}   req
    * @param  {object}   res
    * @param  {function} next
    */
    public async findAllReviews(req: Request, res: Response, next: NextFunction) {
        try {
            let result = await this.parentalService.findAllReviews(req.params.id);
            if (!result) {
                HttpResponseMessage.ErrorResponse(res, "Error");
            } else {
                HttpResponseMessage.successResponseWithData(res, "Sucess", result);
            }
        } catch (err) { 
            HttpResponseMessage.ErrorResponse(res, err)
        }

    }

    /**
    * create review
    * 
    * @param  {object}   req
    * @param  {object}   res
    * @param  {function} next
    */
    public async createReview(req: Request, res: Response, next: NextFunction) {
        try {
            let result = await this.parentalService.postReview(req.body);
            if (!result) {
                HttpResponseMessage.ErrorResponse(res, "Error");
            } else {
                HttpResponseMessage.successResponseWithData(res, "Review has been posted", result);
            }
        } catch (err) { 
            HttpResponseMessage.ErrorResponse(res, err)
        }

    }
}



