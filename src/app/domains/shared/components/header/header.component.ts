import { Component, Input, signal } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({required: true}) cart : IProduct[] = [];

  hideSideMenu = signal(true);

  toogleSideMenu()
  {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
