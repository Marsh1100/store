import { Injectable, computed, signal } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<IProduct[]>([]);
  total = computed(()=>{
    const cart = this.cart();
    return cart.reduce((total,product)=> total + product.price,0);
  })

  constructor() { }

  addtoCart(product: IProduct)
  {
    this.cart.update(statePrev => [...statePrev,product])
    console.log(this.cart());
  }
}
