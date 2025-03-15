import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/Admin';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {
  msgClass :string=null;
  message:string=null;
  constructor(private adminService: AdminService,
                private route: ActivatedRoute,  // required to extract route parameters
                private router: Router) { }

  admin:Admin =new Admin();             
  ngOnInit() {
   this.loadData();
  }
  
  update(){
    let token=localStorage.getItem('token');
  let jwtData=token.split('.')[1];
  let payLoad=JSON.parse(window.atob(jwtData))
  let id: number = payLoad.userId;
  
    if (id != null) {
     
    this.adminService.updateAdmin(this.admin,id).subscribe(
      (resp)=>{
        this.msgClass = 'alert alert-success'
        this.message = "Successfully Updated ";
      
       },
       (fail)=>{
        this.message = null;
       
  
      })
  }
  }
loadData(){
  let token=localStorage.getItem('token');
  let jwtData=token.split('.')[1];
  let payLoad=JSON.parse(window.atob(jwtData))
  let id: number = payLoad.userId;
  this.adminService.getAdminById(id).subscribe(
    result =>{
      this.admin = result;
    })
}
gotoBack(){
  this.router.navigate(["admin"]);
}
}
