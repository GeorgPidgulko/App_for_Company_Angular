import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
/** Products component*/
export class ProductsComponent {
  title: string = "Products";
  btnTitle: string = "New Product";
  //newItem: string = "/addproduct";
  //pageL: string ="addproduct"
  public products: Product[];
  router: Router;

    /** Products ctor */
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, _router:Router) {
    http.get<Product[]>(baseUrl + 'api/Products').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
    this.router = _router;
  }

  onChanged() {
    this.router.navigate(['/addproduct'])
   // console.log("product");
  }
 // CreateNewProduct() { };
}// this.router.navigate(['/products'])


export class Product {
  productId: number;
  createdDate: Date;
  name: string;
  productNumber: number;
  category: ProductCategory;
  productSize: Size;
  quantity: number;
  price: number;
  description: string;
}

export enum ProductCategory {
  Foods,
  Electronics,
  Stationery,
  Goods
}

export enum Size {
  Large,
  Medium,
  Small,
  NotIndicated
}
