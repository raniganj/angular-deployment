import { createAction, createReducer, on, props } from "@ngrx/store";

export const mumbaiScoreIncreament = createAction('On mumbai Score Increament');
export const mumbaiScoreDecreament = createAction('On mumbai Score Decreament');
export const mumScoreincWithPayload = createAction('[On mumbai Score Increament With paylaod]',
  props<{ incrementBy: number }>()
);

export const cskScoreIncreament = createAction('On CSK Score Increament');
export const cskScoreDecreament = createAction('On CSK Score Decreament');
export const cskScoreIncWithPayload = createAction('On CSK Score Increament With paylaod',
  props<{ incrementBy : number }>()
)

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

  on(mumScoreincWithPayload, (state, { incrementBy })=>{
    return {...state, mumbaiScore:state.mumbaiScore+incrementBy};
  }),

  on(cskScoreIncreament, (state)=>{
    return { ...state, cskScore:state.cskScore+1}
  }),

  on(cskScoreDecreament, (state)=>{
    return {...state, cskScore: state.cskScore-1}
  }),

  on(cskScoreIncWithPayload, (state, { incrementBy })=>{
    return {...state, cskScore:state.cskScore+incrementBy};
  }),

)
