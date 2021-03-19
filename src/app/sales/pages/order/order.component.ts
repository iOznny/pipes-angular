import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit {

  public nosotros:  string = 'Demo';
  public inMayus: boolean = true;
  public orderBy: string = '';
  public heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue  
    },
    {
      name: 'Spiderman',
      fly: false,
      color: Color.red  
    },
    {
      name: 'Wonder Woman',
      fly: false,
      color: Color.blue  
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Capitan America',
      fly: false,
      color: Color.blue
    },
    {
      name: 'Wannda Maximoff',
      fly: true,
      color: Color.red
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Cambiar A Mayus.
  public toggleMayus() {
    this.inMayus = !this.inMayus;
  }

  // Cambiar orden
  public changeOrder(value: string) {
    this.orderBy = value;
  }

}
