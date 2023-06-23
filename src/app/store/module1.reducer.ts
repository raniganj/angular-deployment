import { createAction, createReducer, on, props } from "@ngrx/store";

export interface Module1User{
  id:number;
  title: string;
  body: string;
  counter: number
}

export const module1Action1 = createAction('Module1 Action1');
export const module1Action2WithParam = createAction('Module1 Action2 with parameter',
  props<{p1:number}>()
)

export const initialState:Module1User = {
  id:1,
  title: 'User Data',
  body: "Hello User1",
  counter: 25
}

export const module1Reducer = createReducer(
  initialState,
  on(module1Action1, (state)=>{
    return {...state, counter: state.counter+1}
  }),

  on(module1Action2WithParam, (state, {p1})=>{
    return { ...state, counter: state.counter+p1}
  })
)
