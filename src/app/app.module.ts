import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { matchNumberReducer } from './store/counter.reducer';
import { MatchScoreComponent } from './match-score/match-score.component';
import { matchScoreReducer } from './store/matchScore.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
