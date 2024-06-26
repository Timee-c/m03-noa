import { Component, inject, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { BrandDataService } from '../services/brand-data.service';
import { UnitDataService } from '../services/unit-data.service';
import { SubGroupDataService } from '../services/subGroup-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  private brandDataService = inject(BrandDataService);
  private productDataService = inject(ProductDataService);
  private unitDataService = inject(UnitDataService);
  private subGroupDataService = inject(SubGroupDataService);

  nameInput: string = '';
  gtinInput: string = '';
  valueInput: number = 0;
  dateInput: string = '';
  selectedOptionBrand: number | undefined;
  selectedOptionUnit: number | undefined;
  selectedOptionSubGroup: number | undefined;

  ngOnInit(): void {
    this.getBrandServiceData();
    this.getUnitServiceData();
    this.getSubGroupServiceData();
  }

  getUnitServiceData() {
    return this.unitDataService.unities;
  }

  getSubGroupServiceData() {
    return this.subGroupDataService.subGroups;
  }

  getBrandServiceData() {
    return this.brandDataService.brands;
  }

  postProduct() {
    const newProduct = {
      name: this.nameInput,
      gtin: this.gtinInput,
      value: this.valueInput,
      registration_date: this.dateInput,
      id_product_unit: this.selectedOptionUnit,
      id_product_brand: this.selectedOptionBrand,
      id_product_subgroup: this.selectedOptionSubGroup
    };
    this.productDataService.addProduct(newProduct);
  }
}
