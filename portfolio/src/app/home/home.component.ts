import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const options = {
      strings: ['Software Developer', 'Junior Java Developer', 'Full Stack Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    const typed = new Typed('.typing', options);
  }
}
