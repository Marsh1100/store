import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  url : string = 'https://api.escuelajs.co/api/v1/products';
  constructor() { }

  getProducts(category_id?: string)
  {
    const params = category_id ? `/?categoryId=${category_id}` : ''
    console.log(`${this.url}${params}`);
    return this.http.get<IProduct[]>(`${this.url}${params}`);
  }

  getProductById(id:number)
  {
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }
}
