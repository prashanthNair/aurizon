import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { APiResponse } from 'src/app/models/httpResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.serverUrl
   
  constructor(private http: HttpClient) { }

  login(user: any): Observable<APiResponse> {
    return this.http.post<APiResponse>(`${this.url}api/v1/auth`, user);
  }
  createUser(user: any): Observable<APiResponse> {
    return this.http.post<APiResponse>(`${this.url}api/v1/auth/create`, user);
  }
}
