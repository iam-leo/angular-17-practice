import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { DirectivaIfComponent } from './components/directiva-if/directiva-if.component';
import { DirectivaForComponent } from './components/directiva-for/directiva-for.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntroComponent, DirectivaIfComponent, DirectivaForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
}
