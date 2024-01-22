import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ICategory, IProduct } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductComponent } from '@product/components/product/product.component';
import { CategoryService } from '@shared/services/category.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  private _serviceCart =  inject(CartService);
  private _serviceCategory = inject(CategoryService);
  private _productsService = inject(ProductService);
  products = signal<IProduct[]>([]);
  categories = signal<ICategory[]>([]);
  @Input() category_id?: string;


  ngOnChanges(changes : SimpleChanges)
  {
    this.getProducts();
  }

  ngOnInit(){
   this.getProducts();
   this.getCategories();
  }

  addToCart(product: IProduct)
  {
    this._serviceCart.addtoCart(product);
  }

  private getProducts()
  {
    this._productsService.getProducts(this.category_id).subscribe({
      next : (products)=>
      {
        this.products.set(products)
      },
      error :()=>
      {

      }
    });
  }

  private getCategories()
  {
    this._serviceCategory.getAll().subscribe({
      next : (data)=>
      {
        this.categories.set(data)
      },
      error :()=>
      {

      }
    });
  }
}
