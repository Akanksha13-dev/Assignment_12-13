import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from 'src/app/customers.model';
import { User } from 'src/app/user.model';
@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.css']
})
export class CustomersDetailComponent implements OnInit {
  customer:Customers={
    id: '',
    name: '',
    address: '',
    website:'',
    
  };
  message='';
  constructor(private customersService: CustomersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getUserD((this.route.snapshot.paramMap.get('id')));
  }
  getUserD(id:any): void {
    console.log(id);
  this.customersService.getCustomer(id)
  .subscribe(
    data => {
      this.customer = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
}

update(): void {
this.customersService.editCustomer(this.customer.id, this.customer)
  .subscribe(
    response => {
      console.log(response);
      this.message = 'The Customer was updated successfully!';
    },
    error => {
      console.log(error);
    });
}

delete(): void {
this.customersService.deleteCustomer(this.customer.id)
  .subscribe(
    response => {
      
      console.log(response);
      this.message="Deleted this customer";
      //this.router.navigate(['/customers']);
    },
    error => {
      console.log(error);
      this.message="This customer having dependancy in user table(Cannot delete this customer)";
    });
}



}
