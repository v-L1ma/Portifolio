import { Component } from '@angular/core';
import { IndexComponent } from "./pages/index/index.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [IndexComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';
}
