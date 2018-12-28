import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductspageComponent } from './productspage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabcontentComponent } from './tabcontent/tabcontent.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProductComponent,
    ProductspageComponent,
    SidebarComponent,
    TabcontentComponent
  ]
})
export class ProductspageModule { }
