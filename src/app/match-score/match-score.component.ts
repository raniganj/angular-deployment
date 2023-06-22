import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { MyAppState } from '../store/app.state';
import { MatchScore, cskScoreDecreament, cskScoreIncWithPayload, cskScoreIncreament, mumScoreincWithPayload, mumbaiScoreDecreament, mumbaiScoreIncreament } from '../store/matchScore.reducer';

@Component({
  selector: 'app-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.scss']
})
export class MatchScoreComponent implements OnInit {

  matchNumber:number|undefined;
  matchScore:MatchScore|undefined;
  mumbaiInputScore:number = 0
  // cskInputScore:number = 0


  constructor( private store:Store<MyAppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      this.matchNumber = state.matchNumber
      this.matchScore = state.matchScore;
    })

  }

  cskForm = this.fb.group({
    cskInputScore: [0],
  });

  mumbaiScoreIncreament(){
    this.store.dispatch(mumbaiScoreIncreament())

  }
  mumbaiScoreDecreament(){
    this.store.dispatch(mumbaiScoreDecreament())
  }

  mumScoreincWithPayload(){
    this.store.dispatch(mumScoreincWithPayload({ incrementBy: this.mumbaiInputScore }))
  }

  cskScoreIncreament(){
    this.store.dispatch(cskScoreIncreament())
  }
  cskScoreDecreament(){
    this.store.dispatch(cskScoreDecreament())
  }

  cskScoreincWithPayload(){
    let run = this.cskForm.value.cskInputScore;
    run = Number(run)
    this.store.dispatch(cskScoreIncWithPayload({ incrementBy: run }))
  }


}
