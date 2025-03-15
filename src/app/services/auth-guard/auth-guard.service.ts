import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router ,RouterStateSnapshot,UrlTree} from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router:Router,
    private authenticationService:AuthenticationService
  ) { }
  // Method for guarding the router paths for not accesseble by unauthorized user 
  canActivate(){
    if(this.authenticationService.isLoggedIn()){
      //logged in so return true
      return true;
    }
    //not logged in so redirect to login page with the return url
    this.router.navigate(['login']);
    return false;
  }
}
