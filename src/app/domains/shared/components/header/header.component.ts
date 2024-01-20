import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  providers: [CurrencyPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({required: true}) cart : IProduct[] = [];

  hideSideMenu = signal(true);
  total = signal(0);

  toogleSideMenu()
  {
    this.hideSideMenu.update(prevState => !prevState);
  }
  ngOnChanges(change : SimpleChanges){
    const cart = change['cart'];
    if(cart)
    {
      this.total.set(this.calcTotal());
    }
  }

  calcTotal()
  {
    return this.cart.reduce((total,product)=> total + product.price,0);
  }
}
