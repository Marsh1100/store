import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required : true}) product !: IProduct;


  @Output() addTocart = new EventEmitter();

  addToCartHandler()
  {
    this.addTocart.emit(this.product)
  }
}
