import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// services
import { ServicesService } from '../../services/services.service';
// modules 
import { HomepageModule } from './homepage/homepage.module';
import { FooterModule } from './footer/footer.module';
import { ProductdetailModule } from './productdetail/productdetail.module';
import { ProductspageModule } from './productspage/productspage.module';
import { HeaderModule } from './header/header.module';
// core components
import { NgContentComponent } from './ng-content.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule,
    CommonModule,
    HomepageModule,
    FooterModule,
    ProductdetailModule,
    ProductspageModule,
    HttpClientModule,
    HeaderModule
  ],
  declarations: [
    NgContentComponent,
    AboutpageComponent,
    CheckoutpageComponent,
    ContactpageComponent,
    ShoppingcartComponent
  ],
  providers: [
    ServicesService
  ]
})
export class NgContentModule { }
