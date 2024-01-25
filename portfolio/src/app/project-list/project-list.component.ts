import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects = [
    { imageUrl: 'https://images.novel-fast.club/avatar/288x412/media/manga_covers/apotheosis-2-ping.jpg', projectLink: 'projectLink' },
    { imageUrl: 'https://images.novel-fast.club/avatar/288x412/media/manga_covers/zuski.jpg', projectLink: 'projectLink' },
    { imageUrl: 'https://images.novel-fast.club/avatar/288x412/media/manga_covers/0-kill-assassine.jpg', projectLink: 'projectLink' },
    { imageUrl: 'https://images.novel-fast.club/avatar/288x412/media/manga_covers/apotheosis-2-ping.jpg', projectLink: 'projectLink' },
    { imageUrl: 'https://images.novel-fast.club/avatar/288x412/media/manga_covers/zuski.jpg', projectLink: 'projectLink' },
    { imageUrl: 'https://images.novel-fast.club/avatar/288x412/media/manga_covers/0-kill-assassine.jpg', projectLink: 'projectLink' },
  ];
}
