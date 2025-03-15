import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthenticationService) { }
// method for interlinking authorized user http requests  or handling http requests with the service methods from the backend controllers
// by using authorization with the help of token
//The JWT Interceptor intercepts http requests from the application to add a JWT auth token to the Authorization header 
//if the user is logged in or not
  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    if(this.authService.isLoggedIn()){
      let token:string=localStorage.getItem("token");
      request=request.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
