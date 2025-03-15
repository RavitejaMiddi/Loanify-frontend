 
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string=null;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }
// Calling signin function from authentication service for logging in of user
  signIn(credentials) {
    this.authenticationService.login(credentials)
      .subscribe(result => {
        // getting token from the backend
        let token:string=result.token;
       
        let jwtData = token.split('.')[1]
        let payLoad = JSON.parse(window.atob(jwtData))
        // Checking the role of the user and navingating to specific user html page
            let role:string=payLoad.role
            switch(role){
              case "admin" : this.router.navigate(['admin']);
              break

              case "customer" : this.router.navigate(['customer']);
              break

              case "financeVerification":this.router.navigate(['financeOfficer']);
              break

              case "landVerification" :this.router.navigate(['landOfficer']); 
              break

              default : this.router.navigate(['customer']);
            }
         
         this.message=null;
      },
         fail => {
          this.message = fail.error.errorMessage;
        }
      );

  }
}
