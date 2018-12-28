import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../../models/models.model";
import { ServicesService } from "../../../services/services.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-productdetail",
  templateUrl: "./productdetail.component.html",
  styleUrls: ["./productdetail.component.css"]
})
export class ProductdetailComponent implements OnInit, OnDestroy {
  public product: Product = null;
  public subscription: Subscription;

  constructor(
    public activateRoute: ActivatedRoute,
    public servicesService: ServicesService
  ) {}

  ngOnInit() {
    console.log(this.activateRoute);
    this.handleParams();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleParams() {
    this.subscription = this.activateRoute.params.subscribe(data => {
      const id = +data.id;
      this.servicesService.getProductbyID(id).subscribe(product => {
        console.log(product);
        this.product = product;
      });
    });
  }
}
