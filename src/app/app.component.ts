import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { DirectivaIfComponent } from './components/directiva-if/directiva-if.component';
import { DirectivaForComponent } from './components/directiva-for/directiva-for.component';
import { DecoradorInputComponent } from './components/decorador-input/decorador-input.component';
import { DecoradorOutputComponent } from './components/decorador-output/decorador-output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntroComponent, DirectivaIfComponent, DirectivaForComponent, DecoradorInputComponent, DecoradorOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
  decorador = '@Input()'

  manageMsg(evt: any){
    alert(evt)
  }
}
