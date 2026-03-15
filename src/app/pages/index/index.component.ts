import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { TechStackComponent } from '../../components/tech-stack/tech-stack.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactFooterComponent } from '../../components/contact-footer/contact-footer.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    TechStackComponent,
    ProjectsComponent,
    ContactFooterComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
