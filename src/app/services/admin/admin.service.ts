
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin';
import { FinanceVerificationOfficer } from 'src/app/models/FinanceOfficer';
import { LandVerificationOfficer } from 'src/app/models/LandOfficer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:9090/homeloan/admin';
  private baseURL='http://localhost:9090/homeloan/admin/LoanApplications';
  private updateURL='http://localhost:9090/homeloan/admin/updateAdminVerificationStatus/';
  private addLandUrl='http://localhost:9090/homeloan/admin/addLandOfficer';
  private addFinanceURL='http://localhost:9090/homeloan/admin/addFinanceOfficer';
  private addAdminURL='http://localhost:9090/homeloan/admin/addAdmin';
  private viewAllAdminURL='http://localhost:9090/homeloan/admin/Admins';
  private allCustURL='http://localhost:9090/homeloan/admin/customers';
  private viewAllFinanceOfficers='http://localhost:9090/homeloan/admin/FinanceOfficers';
  private viewAllLandOfficers='http://localhost:9090/homeloan/admin/LandOfficers';
  private viewAdminByIdURL ='http://localhost:9090/homeloan/admin';
  private updateAdminUrl='http://localhost:9090/homeloan/admin/updateAdmin/';

  constructor(private http:HttpClient) { }
  getLoanApplicationList():Observable<any>{
    return this.http.get(this.baseURL);
  }
  updateStatus(id:number,value:any):Observable<any>{
    return this.http.put(`${this.updateURL}${id}`,value);
  }
  addLandOfficerDetail(landOfficer:LandVerificationOfficer):Observable<any>{
    return this.http.post(`${this.addLandUrl}`,landOfficer);
  }
  addFinanceOfficerDetail(financeOfficer:FinanceVerificationOfficer):Observable<any>{
    return this.http.post(`${this.addFinanceURL}`,financeOfficer);
  }
  addAdmin(admin:Admin):Observable<any>{
    return this.http.post(`${this.addAdminURL}`,admin);
  }
  viewAllAdmin():Observable<any>{
    return this.http.get(`${this.viewAllAdminURL}`);
  }

  viewAllFinanceOfficer():Observable<any>{
    return this.http.get(`${this.viewAllFinanceOfficers}`);
  }

  viewAllLandOfficer():Observable<any>{
    return this.http.get(`${this.viewAllLandOfficers}`);
  }
  
  getCustomerList():Observable<any>{
    return this.http.get(`${this.allCustURL}`);
  }
  adminLogin(credentials:any):Observable<any>{
    return this.http.post(`${this.url}/login`,credentials);
  }

  updateAdmin(admin:Admin,userId:number){
    return this.http.put(`${this.updateAdminUrl}/${userId}`, admin);
  }
  
  getAdminById(id:number):Observable<any>{
    return this.http.get(`${this.viewAdminByIdURL}/${id}`);
  }
}
