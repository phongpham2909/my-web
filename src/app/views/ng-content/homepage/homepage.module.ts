import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// core components
import { HomepageComponent } from './homepage.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductsaleComponent } from './productsale/productsale.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomepageComponent,
    CollectionComponent,
    ProductsaleComponent,
    SliderComponent
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
