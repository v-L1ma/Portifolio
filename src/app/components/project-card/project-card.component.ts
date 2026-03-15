import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() githubUrl: string = '#';
  @Input() liveUrl: string = '#';
  @Input() techs: string[] = [];
  @Input() techIcons: string[] = [];
  @Input() isFullWidth: boolean = false;
}
