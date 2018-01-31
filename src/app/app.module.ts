import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { AppComponent } from './app.component';
import { PersoPipe } from './pipes/perso.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrapipePipe } from './pipes/contrapipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PersoPipe,
    DomseguroPipe,
    ContrapipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
