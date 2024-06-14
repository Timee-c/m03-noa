import { Component, inject, OnInit } from '@angular/core';
import { BrandDataService } from '../services/brand-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})

export class BrandEditComponent implements OnInit {
  brandDataService = inject(BrandDataService);
  
  id: number = 0;
  brandId: number | undefined;
  name: string = '';
  description: string = '';

  constructor(private route: ActivatedRoute) {}

  loadBrandId(brandId: number) {
    this.id = brandId;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.brandId = Number(params.get('id'));
      this.loadBrandId(this.brandId);
    });
  }

  updateBrand() {
    const newBrand = {
      name: this.name,
      description: this.description,
    }
    this.brandDataService.editBrand(newBrand, this.id);
  }

}
