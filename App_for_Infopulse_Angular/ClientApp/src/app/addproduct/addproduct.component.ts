import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductCategory, Size } from '../products/products.component';

@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
    styleUrls: ['./addproduct.component.css']
})
/** addproduct component*/
export class AddproductComponent {
  public product: Product;
  title: string = "New Product";

  productCategories = ProductCategory;
  http: HttpClient;
  baseUrl: string;
  selectedCategory: string;
  router: Router;

    /** addproduct ctor */
  constructor(http: HttpClient, router: Router, @Inject('BASE_URL') baseUrl: string) {
    this.product = new Product();
    this.product.createdDate = new Date();
    this.product.productSize = Size.Medium;
    this.http = http;
    this.baseUrl = baseUrl;
    this.router = router;
  }

  keys(): Array<string> {    
    var keys = Object.keys(this.productCategories).filter(k => !isNaN(Number(k)));    
    return keys;
  }

  

  createProduct() {
    this.product.category = parseInt(this.selectedCategory);
    console.log(JSON.stringify(this.product));

    this.http.post(this.baseUrl + 'api/Products', this.product).subscribe(result => {
      this.router.navigate(['/products']);
    }, error => console.error(error));
  }

}
