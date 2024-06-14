import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BrandDataService {
  brands: any[] = [];
  
  constructor(private http: HttpClient) { }

  getBrand() {
    this.http.get<any[]>('http://localhost:3000/brands').subscribe(brands => this.brands = brands);
  }

  getBrandById(brandId: any) {
    this.http.get<any>(`http://localhost:3000/brands/${brandId}`).subscribe();
  }

  addBrand(newBrand: any) {
    this.http.post<any>('http://localhost:3000/brands', newBrand).subscribe();
  }

  editBrand(newBrand: any, brandId: number) {
    this.http.put(`http://localhost:3000/brands/${brandId}`, newBrand).subscribe();
  }

  removeBrand(brandId: number) {
    this.http.delete<any>(`http://localhost:3000/brands/${brandId}`).subscribe();
    this.brands.splice(brandId, 1);
  }
}
