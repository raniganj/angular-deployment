import { matchNumberReducer } from "./counter.reducer";
import { MatchScore, matchScoreReducer } from "./matchScore.reducer";
import { Module1User, module1Reducer } from "./module1.reducer";

export interface MyAppState{
  matchNumber: number,
  matchScore : MatchScore,
  module1User : Module1User

}

export const rootReducer = {
  matchNumber : matchNumberReducer,
  matchScore : matchScoreReducer,
  module1User: module1Reducer
}
