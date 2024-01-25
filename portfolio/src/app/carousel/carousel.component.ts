// carousel.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  testimonials: any[] = [
    { id: 1, name: 'Name1', position: 'devloperdgh', image: 'image1.jpg', review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 2, name: 'Name2', position: 'devloperdgh', image: 'image2.jpg', review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 3, name: 'Name1', position: 'devloperdgh', image: 'image1.jpg', review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 4, name: 'Name2', position: 'devloperdgh', image: 'image2.jpg', review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 5, name: 'Name1', position: 'devloperdgh', image: 'image1.jpg', review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 6, name: 'Name2', position: 'devloperdgh', image: 'image2.jpg', review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 7, name: 'Name2', position: 'devloperdgh', image: 'image2.jpg', review: "Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit.." },
    { id: 8, name: 'Name1', position: 'devloperdgh', image: 'image1.jpg', review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 9, name: 'Name2', position: 'devloperdgh', image: 'image2.jpg', review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  responsiveOptions: any[] | undefined;


  ngOnInit() {

     this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }
}