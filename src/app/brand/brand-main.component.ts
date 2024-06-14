import { Component, inject, OnInit } from '@angular/core';
import { BrandDataService } from '../services/brand-data.service';

@Component({
  selector: 'app-brand-main',
  templateUrl: './brand-main.component.html',
  styleUrls: ['./brand-main.component.css']
})
export class BrandMainComponent implements OnInit {
  private brandDataService =  inject(BrandDataService);

  constructor() {}

  ngOnInit(): void {
    this.getBrandDataServiceData().getBrand();
  }

  getBrandDataServiceData() {
    return this.brandDataService;
  }
}
