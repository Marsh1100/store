import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { IProduct } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  private _serviceCart =  inject(CartService);
  private _productsService = inject(ProductService);
  products = signal<IProduct[]>([]);

  ngOnInit(){
    this._productsService.getProducts().subscribe({
      next : (products)=>
      {
        this.products.set(products)
      },
      error :()=>
      {

      }
    });
  }

  addToCart(product: IProduct)
  {
    this._serviceCart.addtoCart(product);
  }
}
