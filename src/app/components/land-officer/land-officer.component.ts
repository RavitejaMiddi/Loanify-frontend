import { Component, OnInit } from '@angular/core';
import { LoanApplication } from 'src/app/models/LoanApplication';
import { LandOfficerService } from 'src/app/services/land-officer/land-officer.service';

@Component({
  selector: 'app-land-officer',
  templateUrl: './land-officer.component.html',
  styleUrls: ['./land-officer.component.css']
})
export class LandOfficerComponent implements OnInit {
/*creates new class, which implements oninit in which has a constructor and a method called ngoninit() 
*/
  
  loanApplication = new LoanApplication();  
  loanApplicationList: LoanApplication[] = [];
  
  constructor(private landOfficerService: LandOfficerService) { }

  ngOnInit():void {

    this.landOfficerService.getLoanApplicationList().subscribe(
      result => {
        this.loanApplicationList = result
      });

  }


  getList(): void {
    this.landOfficerService.getLoanApplicationList().subscribe(
      result => {
        this.loanApplicationList = result
      });

}
/*fetch all the loan applications
*/

updateList(id: number): void {
  this.landOfficerService.updateStatus(id, id).subscribe(
    result => {
      alert("Update Sucessfully!!!")
      this.getList();
    })
/*update loan application.
*/

}
}
