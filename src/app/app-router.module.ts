import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NotCommonsComponent } from './sales/pages/not-commons/not-commons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BasicsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'not-commons', component: NotCommonsComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})

export class AppRouterModule { }
