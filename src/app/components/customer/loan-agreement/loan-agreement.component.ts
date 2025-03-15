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
    this.customerService.getLoanAgreementId(this.loanApplicationid).subscribe(
      (response) => {
        this.loanagreementId = response;
        console.log(this.loanagreementId);
        this.id = response;
      },
      (fail) => {
        this.status = true;
        this.loanStatus = "Agreement Not Found";
        this.agreementStatus = false;
        this.loanagreementId = null;
      }
    );
    if (this.loanagreementId == this.id) {
      this.customerService.getLoanAgreement(this.loanagreementId).subscribe(
        (result) => {
          this.agreementStatus = true;
          this.status = false;
          this.loanAgreement = result;
        }

     )
   }


  }


}
