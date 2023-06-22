import { createAction, createReducer, on } from "@ngrx/store";

export const increament = createAction('Increament Match Number');
export const decrement = createAction('Decrement Match Number');

export const initialState = 20;

export const matchNumberReducer = createReducer(
  initialState,
  on(increament, (state)=>{
    return state+1;
  }),
  on(decrement, (state)=>{
    return state-1;
  })
)
