import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-main',
  templateUrl: './brand-main.component.html',
  styleUrls: ['./brand-main.component.css']
})
export class BrandMainComponent {
  brands: any[] = [{
    id: 0,
    name: 'Hugo Boss',
    description: 'Só perfume brabo'
  },
  {
    id: 1,
    name: 'Adidas',
    description: 'Tenis brabo'
  },{
    id: 1,
    name: 'Adidas',
    description: 'Tenis brabo'
  }];

  addBrand (brandToAdd: any) {
    this.brands.push(brandToAdd);
  }
}
