import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import{CustomersComponent} from './customers/customers.component';
import{AddCustomerComponent} from './add-customer/add-customer.component';
import{CustomersDetailComponent} from './customers-detail/customers-detail.component';
import{CustomerUserComponent} from './customer-user/customer-user.component';
const routes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:HomeComponent},
  {path:'add',component:AddUsersComponent},
  {path:'users/:id',component:UsersDetailComponent},
  {path:'customers',component:CustomersComponent},
  {path:'addCustomer',component:AddCustomerComponent},
  {path:'customers/:id',component:CustomersDetailComponent},
  {path:'customerUsers/:id',component:CustomerUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
