import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  providers: [CurrencyPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private _serviceCart = inject(CartService);

  cart = this._serviceCart.cart;
  total = this._serviceCart.total;

  toogleSideMenu()
  {
    this.hideSideMenu.update(prevState => !prevState);
  }
  

 
}
