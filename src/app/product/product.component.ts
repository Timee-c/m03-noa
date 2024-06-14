import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    { id: 1, name: 'Product 1', gtin: 'GTIN-1', value: 10.99, date: '2024-06-14', subgroup: 'Subgroup A', brand: 'Brand X', unit: 'pcs' },
    { id: 2, name: 'Product 2', gtin: 'GTIN-2', value: 19.99, date: '2024-06-14', subgroup: 'Subgroup B', brand: 'Brand Y', unit: 'pcs' }
  ];

  constructor(private router: Router) {}

  navigateToAddProduct() {
    this.router.navigate(['/product-add']);
  }
}
