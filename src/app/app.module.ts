import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { MatchScoreComponent } from './match-score/match-score.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchScoreComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter : counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
