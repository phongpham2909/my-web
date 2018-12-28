import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "../ng-content/header/header.module";
// core components
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { RegisterpageComponent } from "./registerpage/registerpage.component";
import { FooterComponent } from "./footer/footer.component";
import { NgAuthComponent } from "./ng-auth.component";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    HeaderModule
  ],
  declarations: [
    LoginpageComponent,
    RegisterpageComponent,
    FooterComponent,
    NgAuthComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgAuthModule {}
