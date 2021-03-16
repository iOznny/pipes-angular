import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})

export class BasicsComponent {

  nameLower: string = 'iOznny';
  nameUpper: string = 'IOZNNY';
  nameComplete: string = 'IOznNY suNnY';

  date: Date = new Date(); // el día de hoy.

}