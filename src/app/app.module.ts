import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

// Components
import { AppComponent } from './app.component';

// Cambiar el locale de la app.
import localEsMX from '@angular/common/locales/es-MX';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsMX);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    SalesModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
