import { Component, inject, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productDataService = inject(ProductDataService);
  id: number = 0;
  products: any[] = [];
  constructor() {}

  deleteProduct(productId: number) {
    this.productDataService.removeProduct(productId);
    this.ngOnInit();
    window.location.reload();
  }

  ngOnInit(): void {
    this.productDataService.getProducts();
  }

  getProductDataServiceData() {
    return this.productDataService.products;
  }

}
