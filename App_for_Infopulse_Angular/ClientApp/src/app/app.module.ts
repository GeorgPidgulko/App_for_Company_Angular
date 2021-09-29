import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainTitleComponent } from './main-title/main-title.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { SecondTitleWithButtonComponent } from './second-title-with-button/second-title-with-button.component';
import { ActionTitleComponent } from './action-title/action-title.component';
import { MatSelectModule } from '@angular/material/select';
import { NewOrderComponent } from './new-order/new-order.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { TodayMeetingComponent } from './today-meeting/today-meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddproductComponent,
    MainTitleComponent,
    NavButtonComponent,
    OrdersComponent,
    CustomersComponent,
    SecondTitleWithButtonComponent,
    ActionTitleComponent,
    NewOrderComponent,
    NewCustomerComponent,
    TodayMeetingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent, pathMatch: 'full' },
      { path: 'addproduct', component: AddproductComponent },
      { path: '', component: OrdersComponent},
      { path: 'customers', component: CustomersComponent },
      { path: 'neworder', component: NewOrderComponent },
      { path: 'newcustomer', component: NewCustomerComponent },
      { path: 'meeting', component: TodayMeetingComponent },
    ]),
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
