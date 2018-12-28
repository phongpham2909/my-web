import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
// core components
import { NgContentComponent } from "./views/ng-content/ng-content.component";
import { Notfound404pageComponent } from "./views/notfound404page/notfound404page.component";
import { HomepageComponent } from "./views/ng-content/homepage/homepage.component";
import { ContactpageComponent } from "./views/ng-content/contactpage/contactpage.component";
import { AboutpageComponent } from "./views/ng-content/aboutpage/aboutpage.component";
import { ProductspageComponent } from "./views/ng-content/productspage/productspage.component";
import { ProductdetailComponent } from "./views/ng-content/productdetail/productdetail.component";
import { ShoppingcartComponent } from "./views/ng-content/shoppingcart/shoppingcart.component";
import { NgAuthComponent } from "./views/ng-auth/ng-auth.component";
import { LoginpageComponent } from "./views/ng-auth/loginpage/loginpage.component";
import { RegisterpageComponent } from "./views/ng-auth/registerpage/registerpage.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "",
    component: NgContentComponent,
    children: [
      {
        path: "home",
        component: HomepageComponent
      },
      {
        path: "contact-page",
        component: ContactpageComponent
      },
      {
        path: "about-page",
        component: AboutpageComponent
      },
      {
        path: "products-page",
        component: ProductspageComponent
      },
      {
        path: "product-page/:id",
        component: ProductdetailComponent
      },
      {
        path: "shopping-cart-page",
        component: ShoppingcartComponent
      }
    ]
  },
  {
    path: "auth",
    component: NgAuthComponent,
    children: [
      {
        path: "login-page",
        component: LoginpageComponent
      },
      {
        path: "register-page",
        component: RegisterpageComponent
      },
    ]
  },
  {
    path: "**",
    component:Notfound404pageComponent 
  },
  
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
