import { Component, inject } from '@angular/core';
import { BrandDataService } from '../services/brand-data.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {

private brandDataService = inject(BrandDataService);

nameInput: string = '';
descInput: string = '';

postBrand() {
  const newBrand = {
    name: this.nameInput,
    description: this.descInput
  };
  this.brandDataService.addBrand(newBrand);
  console.log(newBrand.name);
}

}
