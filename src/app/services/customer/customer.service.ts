import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  url: string = 'http://localhost:9090/homeloan/customer';
  updateUrl:string='http://localhost:9090/homeloan/customer/updateCustomer';
  agreement:string='http://localhost:9090/homeloan/customer/loanAgreement';
  agreementId:string ='http://localhost:9090/homeloan/customer/loanAgreementId';

  constructor(private http: HttpClient) {
  }

 

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(`${this.url}/addCustomer`, customer);
  }

  getUserId(username: string): Observable<any> {
    return this.http.get(`${this.url}/getUserId/${username}`);
  }

  getCustomer(userId:number):Observable<any>{
    return this.http.get(`${this.url}/getCustomer/${userId}`)
  }

  applyLoan(userId: number, loanAppliedAmount: number, loanTenureYears: number): Observable<any> {
    return this.http.post(`${this.url}/applyLoan/${userId}/${loanAppliedAmount}/${loanTenureYears}`, userId);
  }
  
  loanTracker(loanApplicationId: number):Observable<any>{
    return this.http.get(`${this.url}/loanTracker/${loanApplicationId}`);
  }
  
   getLoanAgreement(loanAgreementId:number):Observable<any>{
     return this.http.get(`${this.agreement}/${loanAgreementId}`)
   }

  customerLogin(credentials : any): Observable<any> {
    return this.http.post(`${this.url}/login`,credentials);
  }
  updateCustomer(userId:number,customer:Customer):Observable<any>{
    return this.http.put(`${this.updateUrl}/${userId}`,customer);
  }
  getLoanAgreementId(loanApplicationId:number):Observable<any>{
    return this.http.get(`${this.agreementId}/${loanApplicationId}`);
  }
}
