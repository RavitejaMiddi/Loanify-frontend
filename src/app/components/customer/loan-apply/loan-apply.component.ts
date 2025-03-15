import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { LoanApplication } from 'src/app/models/LoanApplication';
import { User } from 'src/app/models/User';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-loan-apply',
  templateUrl: './loan-apply.component.html',
  styleUrls: ['./loan-apply.component.css']
})
export class LoanApplyComponent implements OnInit {

  loanApplication = new LoanApplication();
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }
  status = false;
  applicationId: number;
  save(): void {
    let token = localStorage.getItem('token');

    let jwtData = token.split('.')[1]
    let payLoad = JSON.parse(window.atob(jwtData))

    let userId: number = payLoad.userId

    if (userId != null) {
      this.customerService.applyLoan(userId, this.loanApplication.loanAppliedAmount, this.loanApplication.loanTenureYears).subscribe(
        result => {
          this.applicationId = result.applicationId;
          this.status = true;
        }

      );
    }

  }
}
