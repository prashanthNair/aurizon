
import { Document } from "mongoose";
import { IParentalFacilityService } from "./IParentalFacilityService";
import { ParentalFacility } from "../models/parentalFacility";
import { ParentalFacilityDetails } from "../models/parentalFacilityDetails";
import { Review } from "../models/review";
import { db } from "../configuration/db.config";

class ParentalFacilityService implements IParentalFacilityService {

    private constructor() { }

    private static instance: IParentalFacilityService = null;

    static getInstance() {

        if (!ParentalFacilityService.instance) {
            ParentalFacilityService.instance = new ParentalFacilityService();
        }
        return ParentalFacilityService.instance;
    }

    public async findAllFacility(): Promise<ParentalFacility[]> {

        try {
            let sqlQuery = `select name, id from parental_facilities where isActive = ?`;
            const [rows, fields] = await db.query(sqlQuery, true);
            return <ParentalFacility[]>rows;
        } catch (error) {
            return null;
        }
    }

    public async findFacilityDetails(selectionData: string): Promise<ParentalFacilityDetails[]> {

        try {
            let sqlQuery = `select id, locationInfo, statusMessage, otherFacilities, occupancyInfo from facility_details where cateagory = ?`;
            const [rows, fields] = await db.query(sqlQuery, selectionData);
            return <ParentalFacilityDetails[]>rows;
        } catch (error) {
            return null;
        }
    }


    public async findAllReviews(id: any): Promise<Review[]> {
        try {
            let sqlQuery = `select id,  name, rating, description, category from review where categoryId = ?`;
            const [rows, fields] = await db.query(sqlQuery, id);
            return <Review[]>rows;
        } catch (error) {
            return null;
        }
    }

    public async postReview(reviewObj: Review): Promise<Review> {
        let review: Review = reviewObj;
        return await db.query("INSERT INTO review set ?", review);
    }

    private BuildResult(homeDoc: Document) {
        const obj = Object.assign({}, homeDoc.toObject());
        return obj
    }
}

export { ParentalFacilityService }

