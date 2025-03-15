import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-loan-tracker',
  templateUrl: './loan-tracker.component.html',
  styleUrls: ['./loan-tracker.component.css']
})
export class LoanTrackerComponent implements OnInit {

  status: string;
  loanApplicationId: number;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  getStatus() {
    if (this.loanApplicationId != null) {
      this.customerService.loanTracker(this.loanApplicationId).subscribe(
        (result) =>{ 
          this.status=result
          
        },
        
        (error) => { 
          alert("Please enter a valid Application Id");
          this.status = `Loan Application with this Id ${this.loanApplicationId} does not Exist !  Please Enter Valid Id`;
        }
      );
    }
    else{
      alert("Please enter Loan Application Id first !!!")
    }
  }

}
