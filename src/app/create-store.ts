import { Dispatcher, Reducer, Store, State, ActionReducer } from '@ngrx/store';

export function createStore<T>(reducer: ActionReducer<T>) {
  const initialState = reducer(undefined, { type: '@@init' });
  const dispatcher$ = new Dispatcher();
  const reducer$ = new Reducer(dispatcher$, reducer);
  const state$ = new State(initialState, dispatcher$, reducer$);
  const store = new Store<T>(dispatcher$, reducer$, state$);

  return store;
}