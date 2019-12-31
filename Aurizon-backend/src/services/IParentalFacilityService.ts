import { ParentalFacility } from "../models/parentalFacility";
import { ParentalFacilityDetails } from "../models/parentalFacilityDetails";
import { Review } from "../models/review";

export interface IParentalFacilityService {
    findAllFacility(): Promise<ParentalFacility[]>;
    findFacilityDetails(selectionData: String): Promise<ParentalFacilityDetails[]>;
    findAllReviews(selectionData: string): Promise<Review[]>;
    postReview(reviewObj:Review):Promise<Review>;
}