import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';

import { SearchPipe } from './pipes/search.pipe';

import { SortPipe } from './pipes/sort.pipe';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductCardComponent,
    BlogCardComponent,
    SortPipe,
    SearchPipe,
    SidePanelComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ProductCardComponent,
    BlogCardComponent,
    SortPipe,
    SearchPipe,
    SidePanelComponent,
  ],
})
export class SharedModule {}
