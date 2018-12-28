import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../../models/models.model';
import { ServicesService } from '../../../../services/services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productsale',
  templateUrl: './productsale.component.html',
  styleUrls: ['./productsale.component.css']
})
export class ProductsaleComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public subscription: Subscription;

  constructor(public servicesService: ServicesService) {}

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.subscription = this.servicesService.getAllProduct().subscribe(data => {
      this.products = data;
    }, error => {
      this.servicesService.handleError(error);
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
