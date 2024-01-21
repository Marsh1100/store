import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '@shared/models/product.model';
import { ReversePipe } from "@shared/pipes/reverse.pipe";
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';


@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref]
})
export class ProductComponent {
  @Input({required : true}) product !: IProduct;


  @Output() addTocart = new EventEmitter();

  addToCartHandler()
  {
    this.addTocart.emit(this.product)
  }
}
