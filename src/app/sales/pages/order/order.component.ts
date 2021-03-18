import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit {

  public nosotros:  string = 'Demo';

  constructor() { }

  ngOnInit(): void {
  }

}
