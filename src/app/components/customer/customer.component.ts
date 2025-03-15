import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { LoanApplication } from 'src/app/models/LoanApplication';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerName: string = null;

  customerList: Customer[] = [];
  showCustomer:boolean=false;
  customer: any;
  message: string;
  constructor(private customerService: CustomerService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let token=localStorage.getItem('token');
       
  let jwtData = token.split('.')[1]
  let payLoad = JSON.parse(window.atob(jwtData))

let username :string=payLoad.user;
this.customerName = username;

console.log(this.customerName);
  }

  getCustomer(): void {
    let token=localStorage.getItem('token');
       
        let jwtData = token.split('.')[1]
        let payLoad = JSON.parse(window.atob(jwtData))

    let userId :number=payLoad.userId
    console.log(userId)
   if (userId != null) {
    this.customerService.getCustomer(userId).subscribe(
      (result) => {
        
        this.customerList = result
        console.log(this.customerList)
      
      });
  }

}

toggleCustomer(): void {
  this.showCustomer = !this.showCustomer;
}
update(){
  this.router.navigate(["update"])
}


}
