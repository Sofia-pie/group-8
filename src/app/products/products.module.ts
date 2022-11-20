import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductPageComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
  ],
})
export class ProductsModule {}
