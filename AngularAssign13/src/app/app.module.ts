import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import{CustomersComponent} from './customers/customers.component';
import{AddCustomerComponent} from './add-customer/add-customer.component';
import{CustomersDetailComponent} from './customers-detail/customers-detail.component';
import{CustomerUserComponent} from './customer-user/customer-user.component';
//import {BrowserAnimationsModule} from '@angular/platform browser/animations';

//import {MaterialModule} from '@angular/material'
//import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUsersComponent,
    UsersDetailComponent,
    CustomersComponent,
    AddCustomerComponent,
    CustomersDetailComponent,
    CustomerUserComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
