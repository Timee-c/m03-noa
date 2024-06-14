import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  getProduct() {
    this.http.get<any[]>('http://localhost:3000/products').subscribe(products => this.products = products);
  }

  getProductById(productId: any) {
    this.http.get<any>(`http://localhost:3000/products/${productId}`).subscribe();
  }

  addProduct(newProduct: any) {
    this.http.post<any>('http://localhost:3000/products', newProduct).subscribe();
  }

  editProduct(newProduct: any, productId: number) {
    this.http.put(`http://localhost:3000/products/${productId}`, newProduct).subscribe();
  }

  removeProduct(productId: number) {
    this.http.delete<any>(`http://localhost:3000/products/${productId}`).subscribe();
    this.products.splice(productId, 1);
  }

}
