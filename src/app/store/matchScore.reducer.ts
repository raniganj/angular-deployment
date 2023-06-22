import { createAction, createReducer, on } from "@ngrx/store";

export const mumbaiScoreIncreament = createAction('On mumbai Score Increament');
export const mumbaiScoreDecreament = createAction('On mumbai Score Decreament');
export const cskScoreIncreament = createAction('On CSK Score Increament');
export const cskScoreDecreament = createAction('On CSK Score Decreament');

export interface MatchScore{
  mumbaiScore:number;
  cskScore : number
}

export const initialState: MatchScore = {
  mumbaiScore : 5,
  cskScore : 10
}

export const matchScoreReducer = createReducer(
  initialState,

  on(mumbaiScoreIncreament, (state)=>{
    return {...state, mumbaiScore:state.mumbaiScore+1};
  }),

  on(mumbaiScoreDecreament, (state)=>{
    return {...state, mumbaiScore:state.mumbaiScore-1};
  }),

  on(cskScoreIncreament, (state)=>{
    return { ...state, cskScore:state.cskScore+1}
  }),

  on(cskScoreDecreament, (state)=>{
    return {...state, cskScore: state.cskScore-1}
  })

)
