import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { Forbes101Component } from './forbes101/forbes101.component';
import { HealthComponent } from './health/health.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,LeadershipComponent,Forbes101Component,HealthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'article';
}
