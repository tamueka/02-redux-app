import { createReducer, on } from '@ngrx/store';
import * as actions from './contador.actions';

// creamos el estado inicial
export const initialState = 0;

// creamos funcion privada con el createReducer
const _contadorReducer = createReducer(
  initialState,
  on(actions.incrementar, (state) => state + 1),
  on(actions.decrementar, (state) => state - 1),
  on(actions.multiplicar, (state, { numero }) => state * numero),
  on(actions.dividir, (state, { numero }) => state / numero),
  on(actions.resetear, (state) => 0)
);

// exportamos la funcion con el estado y la accion y devolvemos el reducer creado
export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
