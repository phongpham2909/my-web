import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgAdminComponent } from './ng-admin.component';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgAdminComponent, ProductManagementComponent]
})
export class NgAdminModule { }
