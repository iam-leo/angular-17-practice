import { Component, Input } from '@angular/core';

@Component({
  selector: 'decorador-input',
  standalone: true,
  imports: [],
  templateUrl: './decorador-input.component.html',
  styleUrl: './decorador-input.component.css'
})
export class DecoradorInputComponent {
  @Input() decorador = '';

}
