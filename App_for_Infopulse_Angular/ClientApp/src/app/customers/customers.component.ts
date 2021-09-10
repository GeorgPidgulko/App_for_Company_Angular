import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Order } from '../orders/orders.component';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
/** customers component*/
export class CustomersComponent {
  title: string = "Customers";
  btnTitle: string = "New Customer";
  router: Router; 
  customer1: Customer = new Customer("Joseph Biden","New York, Central Park 8, apart 44");
  customer2: Customer = new Customer("Andriy Shevchenko","Kyiv, Hrushevskoho 25, fl 100.");
  customer3: Customer = new Customer("Scarlett O'Hara","Atlanta, Green avenue 37, private house ");
  customers: Array<Customer> = [];
  /** customers ctor */
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, _router: Router) {
    //http.get<Array<Customer>>(baseUrl + 'api/Customers').subscribe(result => {
    //  this.customers = result;
    //}, error => console.error(error));
    this.router = _router;
    this.customers.push(this.customer1, this.customer2, this.customer3);
  }
  onChanged() {
    this.router.navigate(['/newcustomer'])
    console.log("newcustomer");
  }
}

export class Customer{
  id: number;
  name: string;
  createDate: Date;
  orders: Array<Order>;
  address: string;
  totalOrderCost: number=100;
  OrdersCount: number=1;
  constructor( _name: string, _address:string) {
    this.name = _name;
    this.address = _address;
  }
}

