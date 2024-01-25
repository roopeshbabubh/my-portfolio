import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const options = {
      strings: ['Software Developer', 'Junior Java Developer', 'Full Stack Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    const typed = new Typed('.typing-2', options);
  }
  
  infoList = [
    {
      label: 'Website',
      value: 'www.edddbfgb.co.in'
    },
    {
      label: 'Phone',
      value: '6523652361'
    },
    {
      label: 'City',
      value: 'fgndfndh, tgfh, fgyhj'
    },
    {
      label: 'Degree',
      value: 'Bachelor of Engineering'
    },
    {
      label: 'Email',
      value: 'ksjbvkf@gmail.com'
    }
  ];
}
