import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { IProduct } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  private _serviceProducts = inject(ProductService);
  private _serviceCart = inject(CartService);

  @Input() id !: number;

  product = signal<IProduct | null>(null);
  cover = signal<string>('');

  ngOnInit(){
    if(this.id)
    {
      this._serviceProducts.getProductById(this.id).subscribe({
        next: (product) =>{
          this.product.set(product);
          if(product.images.length > 0)
          {
            this.cover.set(product.images[0]);
          }
        },
        error : (err) =>
        {
          console.log(err);
        }
      })
    }
  }
  
  changeCover(newImg : string)
  {
    this.cover.set(newImg);
  }

  addToCart()
  {
    const product = this.product();
    if(product){
    this._serviceCart.addtoCart(product)
    }
  }

}
