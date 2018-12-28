import { Component, OnInit } from "@angular/core";
import { Product } from "../../../../models/models.model";
import { ServicesService } from "../../../../services/services.service";
import { Subscription } from "rxjs";
import * as $ from "jquery";

@Component({
  selector: "app-tabcontent",
  templateUrl: "./tabcontent.component.html",
  styleUrls: ["./tabcontent.component.css"]
})
export class TabcontentComponent implements OnInit {
  public products: Product[] = [];
  public subscription: Subscription;

  constructor(public servicesService: ServicesService) {}

  ngOnInit() {
    this.loadDataProducts();
  }
  loadDataProducts() {
    this.subscription = this.servicesService.getAllProduct().subscribe(
      data => {
        this.products = data;
      },
      error => {
        this.servicesService.handleError(error);
      }
    );
  }
}
