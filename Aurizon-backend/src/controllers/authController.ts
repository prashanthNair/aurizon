import { Request, Response, NextFunction } from 'express';
import { IAuthService } from '../services/IAuthService';
import { AuthService } from '../services/authService';
import { HttpResponseMessage } from '../utils/httpResponseMessage';
import { User } from '../models/user';

export class AuthController {

    private constructor() {
    }

    private static instance: AuthController = null;
    private authService = null;

    /**
    * To get singleton instance
    * 
    * @param  {object} authService 
    */

    public static getInstance(authService: IAuthService = AuthService.getInstance()) {

        if (!AuthController.instance) {
            AuthController.instance = new AuthController();
        }
        AuthController.instance.authService = authService;// mock service Object is passed as a param from .spec
        return AuthController.instance;
    }

    /**
    * Basic AuthenticationS
    * 
    * @param  {object}   req
    * @param  {object}   res
    * @param  {function} next
    */
    public async login(req: Request, res: Response, next: NextFunction) {
        try {

            // validate the user credential 
            if ((req.body && (req.body.email.length == 0 || req.body.password.length == 0))) {
                return HttpResponseMessage.validationErrorWithData(res, "Login Failed", req);
            }

            const result = await this.authService.login(req.body.email, req.body.password);

            if (result) {
                HttpResponseMessage.successResponseWithData(res, "Login Sucessfull", result);
            } else {
                HttpResponseMessage.ErrorResponse(res, "Login Failed")
            }

        } catch (err) {
            HttpResponseMessage.ErrorResponse(res, err)
        }
    }


    /**
    * post User
    * 
    * @param  {object}   req
    * @param  {object}   res
    * @param  {function} next
    */
    public async postUser(req: Request, res: Response, next: NextFunction) {
        try {

            // validate the user credential 
            if ((req.body && (req.body.email.length == 0 || req.body.password.length == 0))) {
                return HttpResponseMessage.validationErrorWithData(res, "Invalid inputs", req);
            }

            let userData: User = { email: req.body.email, password: req.body.password, created_date: null, isActive: true };
            const result = await this.authService.postUser(userData);

            if (result) { 
                HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
            } else {
                HttpResponseMessage.ErrorResponse(res, "Transaction Failed")
            }
        } catch (error) {
            HttpResponseMessage.ErrorResponse(res, "Transaction 'Failed", error)
        }
    }
}



