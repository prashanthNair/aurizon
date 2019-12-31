import { Request, Response, NextFunction } from 'express';
var HttpStatus = require('http-status-codes'); 
export interface IError {
    status?: number;
    code?: number;
    message?: string;
}

/**
 * 404 middleware to catch error response
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */
export function notFoundErrorHandler(req: Request, res: Response, next: NextFunction) {
    res.status(HttpStatus.NOT_FOUND)
        .json({
            success: false,
            error: {
                code: HttpStatus.NOT_FOUND,
                message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
            },
        });
}

/**
 * Generic error response middleware
 *
 * @param  {object}   err
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */
export function errorHandler(err: IError, req: Request, res: Response, next: NextFunction) {
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR)
        .json({
            success: false,
            error: {
                code: err.code || HttpStatus.INTERNAL_SERVER_ERROR,
                message: err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
            },
        });
}
