import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { HomeComponent } from './components/main/home/home.component';
import { AboutUsComponent } from './components/main/about-us/about-us.component';
import { EmiCalculatorComponent } from './components/main/emi-calculator/emi-calculator.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { RegisterComponent } from './components/main/register/register.component';
import { LandOfficerComponent } from './components/land-officer/land-officer.component';
import { FinanceOfficerComponent } from './components/finance-officer/finance-officer.component';
import { AdminComponent } from './components/admin/admin.component';

import { LoanApplyComponent } from './components/customer/loan-apply/loan-apply.component';

import { LoanAgreementComponent } from './components/customer/loan-agreement/loan-agreement.component';
import { LoanTrackerComponent } from './components/customer/loan-tracker/loan-tracker.component';
import { CustomerComponent } from './components/customer/customer.component';

import { JwtInterceptorService } from './services/jwt-interceptor/jwt-interceptor.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UpdateComponent } from './components/customer/update/update.component';
import { AdminUpdateComponent } from './components/admin/admin-update/admin-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    EmiCalculatorComponent,
    RegisterComponent,
    LandOfficerComponent,
    FinanceOfficerComponent,
    AdminComponent,
    CustomerComponent,
    LoanApplyComponent,
    LoanTrackerComponent,
    LoanAgreementComponent,
    LoginComponent,
    LogoutComponent,
    UpdateComponent,
    AdminUpdateComponent
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
