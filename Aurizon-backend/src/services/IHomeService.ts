import { Home } from "../models/home"; 

export interface IHomeService {
    findAllFacility(): Promise<Home[]>;
    searchFacility( searchParam: String ): Promise<Home[] | null>;
}