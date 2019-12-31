
import { Home } from "../models/home";
import { IHomeService } from "./IHomeService";
import { Document } from "mongoose";
import { db } from "../configuration/db.config";

class HomeService implements IHomeService {

    private constructor() { }

    private static instance: IHomeService = null;

    static getInstance() {

        if (!HomeService.instance) {
            HomeService.instance = new HomeService();
        }
        return HomeService.instance;
    }
 
    public async findAllFacility(): Promise<Home[]> {

        try {
            let sqlQuery = `select name, id from FACILITIES where isActive = ?`;
            const [rows, fields] = await db.query(sqlQuery, true);
            return <Home[]>rows;
        } catch (error) {
            return null;
        }
    }

    public async searchFacility(searchParam: string): Promise<Home[]> {
        try {
            let sqlQuery = `select * from facilities where name like ?`;
            const [rows, fields] = await db.query(sqlQuery, '%' + searchParam+'%');
            return <Home[]>rows;
        } catch (error) {
            return null;
        } 
    }
 
}

export { HomeService }

