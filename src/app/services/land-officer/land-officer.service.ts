import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandOfficerService {
  url:string='http://localhost:9090/homeloan/landOfficer';
  private baseURL='http://localhost:9090/homeloan/landOfficer/LoanApplications';
  private updateURL='http://localhost:9090/homeloan/landOfficer/updateLandVerificationStatus/';
/*
*dependency injection, where the root is visible throughout the application.
*class requests dependencies from external sources.
*/
  constructor(private http: HttpClient) { }

  getLoanApplicationList():Observable<any>{
    return this.http.get(this.baseURL);
  }
  updateStatus(id:number,value:any):Observable<any>{
    return this.http.put(`${this.updateURL}${id}`,value);
  }
  landOfficerLogin(credentials:any):Observable<any>{
    return this.http.post(`${this.url}/login`,credentials);
  }
  /*
  *constructor class which fetch,update, and give login credentials for land officer.
  */
}
