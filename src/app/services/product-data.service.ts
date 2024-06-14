import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private apiUrl = 'http://localhost:3000/products';
    products: any[] = [];

    constructor(private http: HttpClient) { }

    addProduct(newGroup: any): void {
        this.http.post<any>(this.apiUrl, newGroup).subscribe(() => {});
    }
    getProducts(): void {
      
    console.log(this.products)
      this.http.get<any[]>(this.apiUrl).subscribe(products => {
          this.products = products;
      });
  }
  getProduct() {
    this.http.get<any[]>('http://localhost:3000/products').subscribe(products => this.products = products);
  }

  getProductById(productId: any) {
    this.http.get<any>(`http://localhost:3000/products/${productId}`).subscribe();
  }


  editProduct(newProduct: any, productId: number) {
    this.http.put(`http://localhost:3000/products/${productId}`, newProduct).subscribe();
  }

  removeProduct(productId: number) {
    this.http.delete<any>(`http://localhost:3000/products/${productId}`).subscribe();
    this.products.splice(productId, 1);
  }

}
