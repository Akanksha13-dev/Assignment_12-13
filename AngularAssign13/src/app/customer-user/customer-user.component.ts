import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/customers.model';
import { CustomersService } from 'src/app/services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer-user',
  templateUrl: './customer-user.component.html',
  styleUrls: ['./customer-user.component.css']
})
export class CustomerUserComponent implements OnInit {
  customerUsers:any;

  constructor(private customersService: CustomersService,private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.getUserD((this.router.snapshot.paramMap.get('id')));
  }

  toUsersDetail(id:any):void{
    this.route.navigate([`/users/${id}`]);
  }

  getUserD(id:any): void {
    console.log(id);
  this.customersService.getCustomer(id)
  .subscribe(
    data => {
      this.customerUsers = data.usersses;
      console.log(data);
    },
    error => {
      console.log(error);
    });
}
}
