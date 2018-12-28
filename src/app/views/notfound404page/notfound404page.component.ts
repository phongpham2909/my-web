import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notfound404page',
  templateUrl: './notfound404page.component.html',
  styleUrls: ['./notfound404page.component.css']
})
export class Notfound404pageComponent implements OnInit {

  constructor( private element: ElementRef, public location: Location ) { }

  ngOnInit() {

  }

}
