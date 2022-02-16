import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    // seleccionamos un elemento especifico del store con .select()
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  incrementar(): void {
    this.store.dispatch(actions.incrementar());
  }

  decrementar(): void {
    this.store.dispatch(actions.decrementar());
  }

  resetear(): void {
    this.store.dispatch(actions.resetear());
  }
}
