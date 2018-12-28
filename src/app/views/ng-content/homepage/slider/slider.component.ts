import { Component, OnInit, OnDestroy } from '@angular/core';
import { Slider } from '../../../../models/models.model';
import { ServicesService } from '../../../../services/services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  public sliders: Slider[] = [];
  public subscription: Subscription;
  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.loadDataImageSlider();
  }
  loadDataImageSlider() {
    this.subscription = this.servicesService.getAllImageSlider().subscribe(data => {
      this.sliders = data;
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
