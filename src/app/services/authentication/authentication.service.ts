import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  // method for calling http request from the login controller 
  login(credentials){
    return this.http.post<any>('http://localhost:9090/login',credentials).pipe(
      map(
        response=>{
          if(response && response.token){
            //storing token for user login 
            localStorage.setItem('token', response.token);
            return response;
          }
        }
      )
    );
  }
// remove token for user logout
  logout(){
    localStorage.removeItem('token');
  }
  //Checking token so that user is logged in or logged out
  isLoggedIn(){
    let token =localStorage.getItem('token');
    if(!token)
      return false;
    
    return tokenNotExpired(null,token);
  }
}


