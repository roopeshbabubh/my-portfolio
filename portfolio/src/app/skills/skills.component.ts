import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

interface SkillsData {
  name: string;
  percentage: number;
  animatedWidth?: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations:[trigger('typewriter', [
    state(
      'start',
      style({
        width: '0',
        overflow: 'hidden',
        display: 'inline-block',
      })
    ),
    state(
      'end',
      style({
        width: '100%',
        overflow: 'hidden',
        display: 'inline-block',
      })
    ),
    transition('start => end', [
      animate(
        '8s',
        keyframes([
          style({ width: '{{skills.animatedWidth}}%', opacity: 1, offset: 1 }),
        ])
      ),
    ]),
  ]),
],
})
export class SkillsComponent {
  skills : SkillsData[] = [
    { name: 'java', percentage: 75 },
    { name: 'Python', percentage: 40 },
    { name: 'javascript', percentage: 50 },
    { name: 'html', percentage: 80 },
    { name: 'css', percentage: 70 },
    { name: 'sql', percentage: 30 },
    { name: 'spring boot', percentage: 60 },
    { name: 'microservice', percentage: 70 },
    { name: 'angular', percentage: 30 },
    
  ];

  animationState = 'start';

  toggleAnimation() {
    this.animationState = 'end';
  }

  ngAfterViewInit() {
    this.skills.forEach((skills) => {
      skills.animatedWidth = skills.percentage;
    });

    this.toggleAnimation();
  }
}
