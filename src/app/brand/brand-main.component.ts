import { Component, inject } from '@angular/core';
import { BrandDataService } from '../services/brand-data.service';

@Component({
  selector: 'app-brand-main',
  templateUrl: './brand-main.component.html',
  styleUrls: ['./brand-main.component.css']
})
export class BrandMainComponent {

  private brandDataService =  inject(BrandDataService);

  getBrandDataServiceData() {
    return this.brandDataService;
  }
}
