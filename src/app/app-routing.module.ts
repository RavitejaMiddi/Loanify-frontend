import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoanAgreementComponent } from './components/customer/loan-agreement/loan-agreement.component';
import { LoanApplyComponent } from './components/customer/loan-apply/loan-apply.component';
import { LoanTrackerComponent } from './components/customer/loan-tracker/loan-tracker.component';
import { FinanceOfficerComponent } from './components/finance-officer/finance-officer.component';
import { LandOfficerComponent } from './components/land-officer/land-officer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

import { AboutUsComponent } from './components/main/about-us/about-us.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { EmiCalculatorComponent } from './components/main/emi-calculator/emi-calculator.component';
import { HomeComponent } from './components/main/home/home.component';
import { RegisterComponent } from './components/main/register/register.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import{UpdateComponent} from './components/customer/update/update.component';
import { AdminUpdateComponent } from './components/admin/admin-update/admin-update.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'emiCalculator',component: EmiCalculatorComponent},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'customer/loanApply',component:LoanApplyComponent},
  {path:'customer/loanAgreement',component:LoanAgreementComponent},
  {path:'customer/loanTrack',component:LoanTrackerComponent},
  {path:'admin',component:AdminComponent,canActivate: [AuthGuardService]},
  {path:'financeOfficer',component:FinanceOfficerComponent,canActivate: [AuthGuardService]},
  {path:'landOfficer',component:LandOfficerComponent,canActivate: [AuthGuardService]},
  {path:'customer',component:CustomerComponent},
  {path:'update',component:UpdateComponent},
  {path:'update/:userId',component:AdminUpdateComponent,canActivate:[AuthGuardService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
