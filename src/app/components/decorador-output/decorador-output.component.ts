import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'decorador-output',
  standalone: true,
  imports: [],
  templateUrl: './decorador-output.component.html',
  styleUrl: './decorador-output.component.css'
})
export class DecoradorOutputComponent {
  @Output() mensaje = new EventEmitter<string>;
  msgChildComponent = 'Mensaje enviado desde el componente hijo hacia el componente padre.'

  emitirEvento(msj: string){
    this.mensaje.emit(msj);
  }

}
