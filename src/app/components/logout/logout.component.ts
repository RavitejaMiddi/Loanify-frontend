import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
message:string;
//  functionality for the user to logout from login page
  constructor(authService:AuthenticationService) {

    if(authService.isLoggedIn()){
    authService.logout();
    this.message="You have been successfully logged out";
    }
    else{
      this.message="You're browsing as a guest. Sign in for full access";
    }
   }

}
