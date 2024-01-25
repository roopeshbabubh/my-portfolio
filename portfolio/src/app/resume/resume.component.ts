import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  studies = [
    {
      period: '2023',
      name: 'online course',
      title: 'Full stack Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, soluta provident accusamus sapiente cupiditate porro placeat corporis sunt eveniet! Maiores distinctio sequi nam alias ducimus accusamus itaque harum corrupti cum?'
    },
    {
      period: '2021',
      name: 'University to study',
      title: 'mechanicahal',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, soluta provident accusamus sapiente cupiditate porro placeat corporis sunt eveniet! Maiores distinctio sequi nam alias ducimus accusamus itaque harum corrupti cum?'
    }
  ];

  experiences = [
    {
      period: '2022',
      name: 'RunwayProptech(Vivasva)',
      title: 'Junior Software Developer Intern',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, soluta provident accusamus sapiente cupiditate porro placeat corporis sunt eveniet! Maiores distinctio sequi nam alias ducimus accusamus itaque harum corrupti cum?'
    }
  ];

  downloadCV(): void {
    // Use JavaScript to trigger the download
    const link = document.createElement('a');
    link.href = 'https://github.com/roopeshbabubh/my-resume/blob/main/Roopesh%20Resume%20v1.pdf';
    link.download = 'Roopesh CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
