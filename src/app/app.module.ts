import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NgRx
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';

@NgModule({
  declarations: [AppComponent, HijoComponent, NietoComponent],
  imports: [BrowserModule, StoreModule.forRoot({ contador: contadorReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
