import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private apiUrl = ' http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl)
      .pipe(tap((p) => console.log(p)));
  }

  getProduct(id: number | string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: string | number, product: Product) {
    return this.http.patch<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string | number) {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }
}
