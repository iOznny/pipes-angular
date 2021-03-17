import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html'
})

export class NotCommonsComponent {

  // i18n Select
  public name: string = 'fernando';
  public gender: string = 'male';
  
  public invMap = {
    'female': 'invitarla',
    'male': 'invitarlo'
  };
  
  public changeClient() {
    this.name = 'Magui';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Magui', 'Pepe', 'Beto', 'Xadani', 'Marion', 'Margarita', 'Itzel', 'Moon'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  public deleteClient() {
    this.clients.pop();
  }

  //Keyvalue Pipe
  person = {
    name: 'iOznny',
    age: 35,
    address: 'En algun lugar'
  }

  // JSON Pipe
  heroes = [
    {
      name: 'Spiderman',
      vuela: false
    },
    {
      name: 'Ironman',
      vuela: true
    },
    {
      name: 'Wannda',
      vuela: true
    },
    {
      name: 'Vision',
      vuela: true
    }
  ];

  // Async Pipe
  myObservable = interval(1000);

  valuePromese = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa resuelta, fin.');
    }, 3500);
  });

}