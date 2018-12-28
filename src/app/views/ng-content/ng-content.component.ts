import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {
  public routers: Subscription;

  @ViewChild(HeaderComponent) navbar: HeaderComponent;

  constructor(private renderer: Renderer, private router: Router, @Inject(DOCUMENT) private document: any, private element: ElementRef, public location: Location) { }
  ngOnInit() {
    console.log(this.element.nativeElement.children[0].children[0])
    var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    this.routers = this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (window.outerWidth > 992) {
        window.document.children[0].scrollTop = 0;
      } else {
        window.document.activeElement.scrollTop = 0;
      }
      this.navbar.sidebarClose();

      this.renderer.listenGlobal('window', 'scroll', (event) => {
        const number = window.scrollY;
        var _location = this.location.path();
        _location = _location.split('/')[2];

        if (number > 150 || window.pageYOffset > 150) {
          navbar.classList.remove('navbar-transparent');
        } else if (_location !== 'login' && this.location.path() !== '') {
          // remove logic
          navbar.classList.add('navbar-transparent');
        }
      });
    });
  }

}
