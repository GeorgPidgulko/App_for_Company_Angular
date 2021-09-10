import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../products/products.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
/** Orders component*/
export class OrdersComponent implements OnInit {
  title: string = "Orders";
  btnTitle: string = "New Order";
  //http: HttpClient;
  //baseUrl: string;
  router: Router;
    order1 : Order= new Order(1, 100, 1, "first order" );
    order2: Order = new Order(2, 200, 2, "second order" );
    order3: Order = new Order(3, 300, 2, "third order");
  orders: Array<Order> = [];// [this.order1, this.order2, this.order3];
  /** Orders ctor */
  constructor(_router: Router, http: HttpClient, @Inject('BASE_URL') baseUrl) {
    //http.get<Array<Order>>(baseUrl + 'api/Orders').subscribe(result => {
    //  this.orders = result;
    //}, error => console.error(error));
    this.router = _router;
    this.orders.push(this.order1, this.order2, this.order3);
  }
    ngOnInit(): void {
      
  }
  onChanged() {
    this.router.navigate(['/neworder'])
    //console.log("order");
  }


}

export class Order {
  orderId: number;
  totalCost: number;
  customerId: number;
  status: OrderStatus;
  createDate: Date;
  productsInOrder: Array<[Product, number, number]>;
  comment: string;
  constructor(_orderId: number, _totalCost: number, _customerId: number, _comment: string) {
    this.orderId = _orderId;
    this.totalCost = _totalCost;
    this.customerId = _customerId;
    this.status = OrderStatus.New;
    this.createDate = new Date();
    this.comment = _comment;
  }

}


enum OrderStatus {
  New,
  Paid,
  Shipped,
  Delivered,
  Closed
}
