import { User } from 'src/app/models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { Customer } from 'src/app/models/Customer';
import { FinanceVerificationOfficer } from 'src/app/models/FinanceOfficer';
import { LandVerificationOfficer } from 'src/app/models/LandOfficer';
import { LoanApplication } from 'src/app/models/LoanApplication';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FinanceOfficerService } from 'src/app/services/finance-officer/finance-officer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showList1: boolean = false;
  showList: boolean = false;
  showCustomer: boolean = false;
  showAdmin = false;
  showFinanceOfficer=false;
  showLandOfficer=false;
  landOfficer = new LandVerificationOfficer();
  financeOfficer = new FinanceVerificationOfficer();
  admin = new Admin();
  messageD:string;
  adminComponent:any;
 customer:Customer =new Customer();

  //username1:string =null;
  adminContact:String =null;
  adminName:String =null;

 message:string;
 failMessage:string;
 
 ngOnInit(): void {
  this.getAdmin();
  
    }


  constructor(private adminService: AdminService, private router:Router) { }

  loanApplicationList: LoanApplication[] = [];
  customerList: Customer[] = [];
  adminList: Admin[] = [];
  financeOfficerList:FinanceVerificationOfficer[]=[];
  landOfficerList:LandVerificationOfficer[]=[];


  getList(): void {
    this.adminService.getLoanApplicationList().subscribe(
      result => {
        this.loanApplicationList = result
      });
  }
  getCustomer(): void {
    this.adminService.getCustomerList().subscribe(
      result => {
        this.customerList = result
      });
  }

  //admin----------------------------------------------

  getList1(userId:number): void {
    this.adminService.getAdminById(userId).subscribe(
      result => {
        this.admin=result;
        alert(this.admin.adminName);
      });
  }
  toggleList1(): void {
    this.showList1 = !this.showList1;
  }

//Admin---------------------------------------


  toggleList(): void {
    this.showList = !this.showList;
  }
 
  toggleCustomer(): void {
    this.showCustomer = !this.showCustomer;
  }
  toggleAdmin(): void {
    this.showAdmin = !this.showAdmin;
  }

  toggleFinanceOfficer(): void {
    this.showFinanceOfficer = !this.showFinanceOfficer;
  }

  toggleLandOfficer(): void {
    this.showLandOfficer = !this.showLandOfficer;
  }
  updateList(id: number): void {
    this.adminService.updateStatus(id, id).subscribe(
      result => {
        alert("Update Sucessfully!!!")
        this.getList()
      });
  }
  viewAllAdmin(): void {
    this.adminService.viewAllAdmin().subscribe(
    
      result => {
        this.adminList = result;
      }
    );
  }

  viewAllFinanceOfficers(): void {
    this.adminService.viewAllFinanceOfficer().subscribe(
      result => {
        this.financeOfficerList = result;
      }
    );
  }

  viewAllLandOfficers(): void {
    this.adminService.viewAllLandOfficer().subscribe(
      result => {
        this.landOfficerList = result;
      }
    );
  }
  

  addlandclick() {
    this.landOfficer.role="landVerification"
    this.adminService.addLandOfficerDetail(this.landOfficer).subscribe(
      result => {
        alert("Land Officer Details Added");
        this.router.navigate(["/admin"]);
      },
    );
  }
  addfinclick() {
    this.financeOfficer.role="financeVerification";
    this.adminService.addFinanceOfficerDetail(this.financeOfficer).subscribe(
      result => {
        alert("Finance Officer Details Added");
        this.router.navigate(["/admin"]);
      }
    );
  }

  addAdmin() {
    this.admin.role="admin";
    this.adminService.addAdmin(this.admin).subscribe(
      result => {
        alert("Admin Added");
        this.router.navigate(["/admin"]);
      }
    );
  }




  getAdmin():void{
    let token=localStorage.getItem('token');
    let jwtData=token.split('.')[1];
    let payLoad=JSON.parse(window.atob(jwtData))
    let id: number = payLoad.userId;
    //this.adminService.getAdminById(id).subscribe(
    //   result =>{
    //     this.admin = result;
    //     console.log(this.admin);
    // })
    //console.log(this.adminName);

    if(id!=null){
      this.adminService.getAdminById(id).subscribe(
        (result) =>{
          this.adminComponent=result
          console.log(this.adminComponent)
        }
      );
    }
  }
}

