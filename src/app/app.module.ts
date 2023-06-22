import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { matchNumberReducer } from './store/counter.reducer';
import { MatchScoreComponent } from './match-score/match-score.component';
import { matchScoreReducer } from './store/matchScore.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MatchScoreComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      matchNumber : matchNumberReducer,
      matchScore : matchScoreReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
