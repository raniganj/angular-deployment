import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from '../store/app.state';
import { MatchScore, cskScoreDecreament, cskScoreIncreament, mumbaiScoreDecreament, mumbaiScoreIncreament } from '../store/matchScore.reducer';

@Component({
  selector: 'app-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.scss']
})
export class MatchScoreComponent implements OnInit {

  matchNumber:number|undefined;
  matchScore:MatchScore|undefined;

  constructor( private store:Store<MyAppState>) { }

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      console.log(state)
      this.matchNumber = state.matchNumber
      this.matchScore = state.matchScore;
    })
  }

  mumbaiScoreIncreament(){
    this.store.dispatch(mumbaiScoreIncreament())

  }
  mumbaiScoreDecreament(){
    this.store.dispatch(mumbaiScoreDecreament())
  }

  cskScoreIncreament(){
    this.store.dispatch(cskScoreIncreament())
  }
  cskScoreDecreament(){
    this.store.dispatch(cskScoreDecreament())
  }


}
