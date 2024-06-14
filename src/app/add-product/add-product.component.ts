import { Component, inject, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { BrandDataService } from '../services/brand-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  private brandDataService = inject(BrandDataService);
  private productDataService = inject(ProductDataService);

  nameInput: string = '';
  gtinInput: string = '';
  valueInput: number = 0;
  dateInput: string = '';
  selectedOptionBrand: number | undefined;

  ngOnInit(): void {
    this.getBrandServiceData();
  }

  getBrandServiceData() {
    return this.brandDataService.brands;
  }

  postProduct() {
    const newProduct = {
      name: this.nameInput,
      gtin: this.gtinInput,
      value: this.valueInput,
      date: this.dateInput
    };
    this.productDataService.addProduct(newProduct);
  }
}
