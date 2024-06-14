import { Component, inject, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { BrandDataService } from '../services/brand-data.service';
import { UnitDataService } from '../services/unit-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  private brandDataService = inject(BrandDataService);
  private productDataService = inject(ProductDataService);
  private unitDataService = inject(UnitDataService)

  nameInput: string = '';
  gtinInput: string = '';
  valueInput: number = 0;
  dateInput: string = '';
  selectedOptionBrand: number | undefined;
  selectedOptionUnit: number | undefined;

  ngOnInit(): void {
    this.getBrandServiceData();
    this.getUnitServiceData();
  }

  getUnitServiceData() {
    console.log(this.unitDataService.unities);
    return this.unitDataService.unities;

  }

  getBrandServiceData() {
    return this.brandDataService.brands;
  }

  postProduct() {
    const newProduct = {
      name: this.nameInput,
      gtin: this.gtinInput,
      value: this.valueInput,
      date: this.dateInput,
      id_product_unit: this.getUnitServiceData(),
      id_product_brand: this.getBrandServiceData()
    };
    this.productDataService.addProduct(newProduct);
  }
}
