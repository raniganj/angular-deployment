import { createAction, createReducer, on } from "@ngrx/store";

export const increament = createAction('Increament Counter');
export const decrement = createAction('Decrement Counter');

export const initialState = 20;

export const counterReducer = createReducer(
  initialState,
  on(increament, (state)=>{
    return state+1;
  }),
  on(decrement, (state)=>{
    return state-1;
  })
)
