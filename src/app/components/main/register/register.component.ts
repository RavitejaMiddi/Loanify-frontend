import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   customer=new Customer();

  constructor(private customerService: CustomerService,
              private router :Router) { 
    }

  ngOnInit(): void {
  }
  // registration form save function for html page after  clicking submit button
  save(registerForm: NgForm): void {

    this.customer.role="customer";
    
    this.customerService.addCustomer(this.customer).subscribe(
      result => {
        
        alert("Register Successfully !!! ")
        this.router.navigate(['login'])
      }
    );
  }
}
