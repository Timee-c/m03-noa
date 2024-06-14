import { Component, inject } from '@angular/core';
import { BrandDataService } from '../services/brand-data.service';

@Component({
  selector: 'app-brand-main',
  templateUrl: './brand-main.component.html',
  styleUrls: ['./brand-main.component.css']
})
export class BrandMainComponent {
  private brandsService = inject(BrandDataService);

  getbrandsServiceData() {
    return this.brandsService;
  }

  addBrand(brandToAdd: any) {
    this.brandsService.addBrand(brandToAdd);
    brandToAdd.id = this.brandsService.brands.length + 1;
  }
}
