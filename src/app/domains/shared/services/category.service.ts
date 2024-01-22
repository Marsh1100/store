import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICategory } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  url : string = 'https://api.escuelajs.co/api/v1/categories';
  
  getAll()
  {
    return this.http.get<ICategory[]>(this.url);
  }
  constructor() { }
}
