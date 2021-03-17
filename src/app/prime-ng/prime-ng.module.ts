import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos del Prime NG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule
  ]
})

export class PrimeNgModule { }
