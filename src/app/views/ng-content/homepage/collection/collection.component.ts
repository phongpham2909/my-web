import { Component, OnInit, OnDestroy } from '@angular/core';
import { Collection } from '../../../../models/models.model';
import { ServicesService } from '../../../../services/services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnDestroy {
  public collections: Collection[] = [];
  public subscription: Subscription;

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.loadCollection();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  loadCollection() {
    this.subscription = this.servicesService.getAllCollection().subscribe(data => {
      this.collections = data;
    }, error => {
      this.servicesService.handleError(error);
    });
  }

}