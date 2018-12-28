import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductdetailComponent } from './productdetail.component';
import { FancyproductsComponent } from './fancyproducts/fancyproducts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProductdetailComponent,
    FancyproductsComponent
  ]
})
export class ProductdetailModule { }
