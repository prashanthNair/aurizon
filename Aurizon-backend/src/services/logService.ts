
import { User } from "../models/user";
import { IAuthService } from "./IAuthService";
import { Document } from "mongoose";
import { db } from "../configuration/db.config";
import { ILogService } from "./ILogService";
import { Log } from "../models/log";
import { logModel } from "../models/logModel";

class LogService implements ILogService {

    private constructor() { }

    private static instance: ILogService = null;

    static getInstance() {

        if (!LogService.instance) {
            LogService.instance = new LogService();
        }
        return LogService.instance;
    }

    public async createlog(logObj: Log): Promise<Log> {
        try {
            let log: Log = logObj;
            let doc = new logModel({
                message: logObj.message,
                error: logObj.description,
                decription: logObj.description
            });
            doc = doc.save();
            return doc;
        } catch (error) {

        } 
    }

}

export { LogService }

