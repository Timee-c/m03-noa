import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
id: number = 0;
productId: number | undefined;
name: string = '';
gtin: string = '';
value: number = 0;
date: string = '';
private productDataService = inject(ProductDataService);

editProduct() {
  const newProduct = {
    name: this.name,
    gtin: this.gtin,
    value: this.value,
    date: this.date
  }
  this.productDataService.editProduct(newProduct, this.id);
}

constructor(private route: ActivatedRoute) {}

loadProductDetails(productId: number) {
  this.id = productId;
}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.productId = Number(params.get('id'));
    this.loadProductDetails(this.productId)
  })
}

}
