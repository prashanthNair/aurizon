import homeRoutes from "../routes/home"; 
import parentalFacilityRoutes from "../routes/parentalFacility";
import authRoutes from "../routes/auth";

export default function registerRoutes( app ) {
    homeRoutes( app ); 
    parentalFacilityRoutes(app);
    authRoutes(app)
}