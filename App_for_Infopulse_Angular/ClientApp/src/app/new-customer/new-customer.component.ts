import { Component, Inject } from '@angular/core';
import { Customer } from '../customers/customers.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-customer',
    templateUrl: './new-customer.component.html',
    styleUrls: ['./new-customer.component.css']
})
/** NewCustomer component*/
export class NewCustomerComponent {
  title: string = "New Customer";
 // customer: Customer = new Customer(0, "", "",);
  customer: Customer;

  baseUrl: string;
  router: Router;
  http: HttpClient;
    /** NewCustomer ctor */
  constructor(http: HttpClient, router: Router, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.router = router;
    this.customer = new Customer("","");
    this.customer.createDate = new Date();
  }

  CreateNewCustomer() {
   // this.product.category = parseInt(this.selectedCategory);
    console.log(JSON.stringify(this.customer));

    this.http.post(this.baseUrl + 'api/Customers', this.customer).subscribe(result => {
      this.router.navigate(['/customers']);
    }, error => console.error(error));
  }
}
