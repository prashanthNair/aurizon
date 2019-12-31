import Logger from "./logger";
import { HttpResponse } from "../models/httpResponse";
import { Response } from 'express';
var HttpStatus = require('http-status-codes');

export class HttpResponseMessage {

    /**
     * Sccuess Response 
     *
     * @param  {string}   message
     * @param  {object}   res
     */

    public static successResponse(res: Response, message: string): any { 
        let resData = new HttpResponse();
        resData = { success: true, status: 1, message, data: [] };
        Logger.error(resData.message);
        return res.status(HttpStatus.OK).json(resData);
    };

     /**
     * Sccuess Response with Data
     *
     * @param  {object}   res
     * @param  {string}   message
     * @param  {object}   data
     */
    
    public static successResponseWithData(res: Response, message: string, data: object): any {

        let resData = new HttpResponse();
        resData = { success: true, status: 1, message, data };
        Logger.error(resData.message);
        return res.status(HttpStatus.OK).json(resData);

    };

     /**
     * Error Response
     *
     * @param  {object}   res
     * @param  {string}   message
     */

    public static ErrorResponse(res: Response, message: string,error?:any): any {

        let resData = new HttpResponse();
        resData = {
            success: false, status: 0, message, error: {
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
                stackTrace:error
            }, data: []
        };
        Logger.error(resData.message);
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(resData);
    };

    /**
     * Not Found Erro Response
     *
     * @param  {object}   res
     * @param  {string}   message
     */
    public static notFoundResponse(res: Response, message: string) {

        let resData = new HttpResponse();
        resData = {
            success: false, status: 0, message, error: {
                code: HttpStatus.NOT_FOUND,
                message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
            }, data: {}
        };
        Logger.error(message)
        return res.status(404).json({});
    };

    /**
     * Not Found Erro Response
     *
     * @param  {object}   res
     * @param  {string}   message
     */
    public static validationErrorWithData(res: Response, message: string, data: object) {
        let resData = new HttpResponse();
        resData = {
            success: false, status: 0, message, error: {
                code: HttpStatus.BAD_REQUEST,
                message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
            }, data
        };
        Logger.error(resData.message)
        return res.status(HttpStatus.BAD_REQUEST).json(resData);
    };
}