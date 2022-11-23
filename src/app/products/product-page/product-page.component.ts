import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../core/models/product';
import { CartService } from '../../core/services/cart.service';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  info: boolean = true;
  product: Product;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.productService.getProduct(params.get('id')!);
        })
      )
      .subscribe((prod) => (this.product = prod));
  }
  decrease() {
    this.quantity--;
  }

  add() {
    this.quantity++;
  }
  showInfo() {
    this.info = true;
  }

  showAdditional() {
    this.info = false;
  }

  buy(event: any) {
    console.log(event);
    this.cartService.addItem({ product: event, quantity: this.quantity });
  }
}
