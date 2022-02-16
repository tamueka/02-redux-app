import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, resetear } from './contador.actions';

// creamos el estado inicial
export const initialState = 0;

// creamos funcion privada con el createReducer
const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(resetear, (state) => 0)
);

// exportamos la funcion con el estado y la accion y devolvemos el reducer creado
export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
