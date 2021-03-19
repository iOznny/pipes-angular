import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Components
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';

// Pipes
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    NumbersComponent, 
    NotCommonsComponent, 
    BasicsComponent, 
    OrderComponent,
    MayusculasPipe,
    FlyPipe,
    OrderPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ], 
  exports: [
    NumbersComponent, 
    NotCommonsComponent, 
    BasicsComponent, 
    OrderComponent
  ]
})

export class SalesModule { }