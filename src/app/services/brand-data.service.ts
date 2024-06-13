import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandDataService {
brands: any[] = [];

addBrand (newBrand: any) {
  newBrand.id = this.brands.length + 1;
  this.brands.push(newBrand);
}

removeBrand (brandId: number) {
  this.brands.splice(brandId, 1);
}

  constructor() { }
}
