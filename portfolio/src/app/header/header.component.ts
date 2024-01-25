import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var bootstrap: any; // Declare Bootstrap variable

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarSticky: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Close offcanvas when navigating to a new route
        this.closeOffcanvas();
      }
    });
  }

  ngAfterViewInit() {
    // Initialize offcanvas with Bootstrap
    const offcanvasElement = document.getElementById('navbarOffcanvasLg');
    if (offcanvasElement) {
      new bootstrap.Offcanvas(offcanvasElement);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarSticky = window.scrollY > 20;
  }

  closeOffcanvas() {
    // Replace 'navbarOffcanvasLg' with the actual id of your offcanvas element
    const offcanvas = document.getElementById('navbarOffcanvasLg');
    if (offcanvas) {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }
  }
}
