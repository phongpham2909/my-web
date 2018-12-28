// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgContentModule } from './views/ng-content/ng-content.module';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { NgAuthModule } from './views/ng-auth/ng-auth.module';
// services
import { ServicesService } from './services/services.service';
// core components
import { AppComponent } from './app.component';
import { Notfound404pageComponent } from './views/notfound404page/notfound404page.component';


@NgModule({
  declarations: [
    AppComponent,
    Notfound404pageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule,
    NgContentModule,
    NgAuthModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
