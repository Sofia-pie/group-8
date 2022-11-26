import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/product';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrls: ['./products-data.component.css'],
})
export class ProductsDataComponent implements OnInit {
  products: Product[];
  articul: string;
  name: string;
  amount: string;
  id: number = 0;

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((prod) => (this.products = prod));
  }

  deleteProduct(id: number | string) {
    this.productsService
      .deleteProduct(id)
      .subscribe(() =>
        this.productsService
          .getProducts()
          .subscribe((prod) => (this.products = prod))
      );
  }
}
