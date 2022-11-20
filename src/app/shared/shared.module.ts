import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';

import { SearchPipe } from './pipes/search.pipe';
import { RouterLink } from '@angular/router';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [ProductCardComponent, BlogCardComponent, SortPipe, SearchPipe],
  imports: [CommonModule, RouterLink],
  exports: [ProductCardComponent, BlogCardComponent, SortPipe, SearchPipe],
})
export class SharedModule {}
