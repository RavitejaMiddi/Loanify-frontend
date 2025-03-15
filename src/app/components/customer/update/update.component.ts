import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CustomerComponent } from '../customer.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

 
  msgClass: string;
  message: string = null;
 
  customer:Customer={
    customerName: null,
    mobileNumber: null,
    emailId: null,
    dateOfBirth: null,
    gender: null,
    nationality: null,
    aadharNumber: null,
    panNumber: null,
    username: '',
    password: undefined,
    role: undefined
  }
  constructor(private customerService:CustomerService, private route: ActivatedRoute,  // required to extract route parameters
    private router: Router) { }
    
  ngOnInit() {
    let token=localStorage.getItem('token');
    let jwtData = token.split('.')[1]
   let payLoad = JSON.parse(window.atob(jwtData))
   let userId:number =payLoad.userId
    this.customerService.getCustomer(userId).subscribe(
      (result) => {
        this.customer = result
      });

  }
updateuser(){
  let token=localStorage.getItem('token');
   let jwtData = token.split('.')[1]
  let payLoad = JSON.parse(window.atob(jwtData))
  let userId :number=payLoad.userId
  console.log(userId);
  console.log(this.customer);

  if (userId != null) {
   
  this.customerService.updateCustomer(userId,this.customer).subscribe(
    (resp)=>{
      this.msgClass = 'alert alert-success'
      this.message = "Successfully Updated ";
    
     },
     (fail)=>{
      this.message = null;
     

    }
  )
}



}
gotoCustomerHome(){
  this.router.navigate(["customer"]);
}
}
