import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})

export class MenuComponent implements OnInit {
  
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    // Menu
    this.items = [
      {
        label:'Pipes',
        icon:'pi pi-desktop',
        items:[
            {
                label:'Textos y Fechas',
                icon:'pi pi-align-left',
                routerLink: '/'
            },
            {
                label:'Numeros',
                icon:'pi pi-dollar',
                routerLink: 'numbers'
            },
            {
                label:'Numeros',
                icon:'pi pi-globe',
                routerLink: 'not-commons'
            }
        ]
      },
      {
        label: 'Personalizados',
        icon: 'pi pi-cog'
      }
    ];
  }

}
