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

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((prod) => (this.products = prod));
  }
}
