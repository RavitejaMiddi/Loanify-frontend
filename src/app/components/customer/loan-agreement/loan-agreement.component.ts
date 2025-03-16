import { Component, OnInit } from '@angular/core';
import { LoanAgreement } from 'src/app/models/LoanAgreement';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-loan-agreement',
  templateUrl: './loan-agreement.component.html',
  styleUrls: ['./loan-agreement.component.css']
})
export class LoanAgreementComponent implements OnInit {
  loanAgreement = new LoanAgreement();
  status: boolean = false;
  agreementStatus: boolean = false;
  loanStatus: string;
  agreementId: number;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  loanApplicationid: number;
  loanagreementId: number;
  message: string;
  id:number;
  getAgreementId() {
    console.log("Fetching Loan Agreement ID for:", this.loanApplicationid);
  
    this.customerService.getLoanAgreementId(this.loanApplicationid).subscribe(
      (response) => {
        console.log("Received Loan Agreement ID Response:", response);
  
        // Assign the response to loanAgreement
        this.loanAgreement = response;
        console.log("Loan Agreement Details:", this.loanAgreement);
  
        // Set agreementStatus to true to display the data
        this.agreementStatus = true;
        this.status = false;
      },
      (error) => {
        console.error("Error fetching loan agreement ID:", error);
        this.status = true;
        this.loanStatus = "Agreement Not Found";
        this.agreementStatus = false;
      }
    );
  }}