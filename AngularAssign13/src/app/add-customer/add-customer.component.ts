import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
//import { Customers } from 'src/app/customers.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  newCustomer = {
    id: '',
    name: '',
    
    address: '',
    website:''
  
  }
  submitted = false;
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
  }
  saveCustomer(): void {
    const data = {
      id: parseInt(this.newCustomer.id),
      name: this.newCustomer.name,
      address:this.newCustomer.address,
      website: this.newCustomer.website,
      
    };
    console.log("data:",data);
    console.log("Object1:",this.newCustomer);
    this.customersService.addCustomer(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  new_Customer(): void {
    this.submitted = false;
    this.newCustomer= {

      id: '',
      name: '',
      
      address: '',
      website:''
    };
  }
  

}
