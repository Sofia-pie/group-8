import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductsDataComponent } from './products-data/products-data.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, ProductsDataComponent],
  imports: [CommonModule, RouterModule, SharedModule, FormsModule],
})
export class DashboardModule {}
