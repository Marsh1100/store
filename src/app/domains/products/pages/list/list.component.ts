import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { IProduct } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<IProduct[]>([]);

  //Carrito de compras
  cart = signal<IProduct[]>([]);


  constructor()
  {
    const initProducts : IProduct[] =
    [
      {
        id : Date.now(),
        title: 'Pro 1',
        price:100,
        image : 'https://picsum.photos/640/640?r=22',
        creationAt : new Date().toISOString(),
      },
      {
        id : Date.now(),
        title: 'Pro 3',
        price:50,
        image : 'https://picsum.photos/640/640?r=2',
        creationAt : new Date().toISOString(),
      },
      {
        id : Date.now(),
        title: 'Pro 2',
        price:189,
        image : 'https://picsum.photos/640/640?r=20',
        creationAt : new Date().toISOString(),
      },
      {
        id : Date.now(),
        title: 'Pro 3',
        price:50,
        image : 'https://picsum.photos/640/640?r=15',
        creationAt : new Date().toISOString(),
      }
    ]

    this.products.set(initProducts);
  }

  addToCart(product: IProduct)
  {
    this.cart.update(products=> [...products, product])
  }
}
