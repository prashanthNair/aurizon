import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { environment } from 'src/environments/environment';
import { ParentalFacility } from 'src/app/models/parentalFacility';
import { ParentalFacilityDetails } from 'src/app/models/parentalFacilityDetails';
import { Review } from 'src/app/models/review';
import { Home } from 'src/app/models/home';
import { APiResponse } from 'src/app/models/httpResponse';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = environment.serverUrl
  constructor(private http: HttpClient) { }
  
  getAllFacility(): Observable<APiResponse>{
    return this.http.get<APiResponse>(`${this.url}api/v1/home`);
  }

  getFacilityDetails(selectionData: String): Observable<APiResponse>{
    return this.http.get<APiResponse>(`${this.url}api/v1/home/search`);
  }
 
 
}
