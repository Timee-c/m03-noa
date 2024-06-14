import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';
import { BrandDataService } from '../services/brand-data.service';
import { UnitDataService } from '../services/unit-data.service';
import { SubGroupDataService } from '../services/subGroup-data.service';

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
selectedOptionBrand: number | undefined;
selectedOptionUnit: number | undefined;

private productDataService = inject(ProductDataService);
private brandDataService = inject(BrandDataService);
private unitDataService = inject(UnitDataService);
private subGroupDataService = inject(SubGroupDataService);


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
  this.getUnitServiceData();
  this.getBrandServiceData();
  this.getSubGRoupServiceData();
}

getUnitServiceData() {
  return this.unitDataService.unities;

}

getBrandServiceData() {
  return this.brandDataService.brands;
}

getSubGRoupServiceData() {
  return this.subGroupDataService.subGroups;
}

}
