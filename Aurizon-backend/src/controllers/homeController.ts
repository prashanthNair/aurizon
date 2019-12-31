import { Request, Response, NextFunction } from 'express';
import { IHomeService } from "../services/IHomeService";
import { HomeService } from "../services/homeService";
import { HttpResponseMessage } from '../utils/httpResponseMessage'; 

export class HomeController {

    private constructor() {
    }

    private static instance: HomeController = null;
    private homeService: IHomeService = null;

    /**
    * To get singleton instance
    * 
    * @param  {object} homeService 
    */
    public static getInstance(homeService: IHomeService = HomeService.getInstance()) {

        if (!HomeController.instance) {
            HomeController.instance = new HomeController();
        }
        HomeController.instance.homeService = homeService; // mock service Object is passed as a param from .spec
        return HomeController.instance;
    }


    /**
    * fetch all facilities
    *
    * @param  {object}   req
    * @param  {object}   res
    * @param  {function} next
    */
    public async getAllFacility(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.homeService.findAllFacility();
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
    * search facility
    * 
    * @param  {object}   req
    * @param  {object}   res
    * @param  {function} next
    */
    public async search(req: Request, res: Response, next: NextFunction) {

        try {
            const result = await this.homeService.searchFacility(req.params.id);
            if (!result) {
                HttpResponseMessage.ErrorResponse(res, "Error");
            } else {
                HttpResponseMessage.successResponseWithData(res, "Sucess", result);
            }
        } catch (err) {  
            HttpResponseMessage.ErrorResponse(res, err)
        } 
    } 
}



