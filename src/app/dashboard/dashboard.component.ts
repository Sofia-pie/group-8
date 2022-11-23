import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private productsService: ProductService) {}
  products: Product[];
  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((prod) => (this.products = prod.slice(0, 4)));
  }
}
