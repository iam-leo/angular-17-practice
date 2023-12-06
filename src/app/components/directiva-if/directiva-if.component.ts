import { Component } from '@angular/core';

@Component({
  selector: 'directiva-if',
  standalone: true,
  imports: [],
  templateUrl: './directiva-if.component.html',
  styleUrl: './directiva-if.component.css'
})
export class DirectivaIfComponent {
  state = false;

  changeState(){
    this.state = this.state ? false : true
  }
}
