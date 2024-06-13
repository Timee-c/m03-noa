import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandDataService {
brands: any[] = [{
  id: 0,
  name: 'Hugo Boss',
  description: 'Bom'
}];

addBrand (newBrand: any) {
  this.brands.push(newBrand);
}

removeBrand (brandId: number) {
  this.brands.splice(brandId, 1);
}

  constructor() { }
}
