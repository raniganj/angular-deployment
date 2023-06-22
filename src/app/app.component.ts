import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { decrement, increament } from './store/counter.reducer';
import {MyAppState} from './store/app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-deployment';
  myMatchNumber: number = 0;

  constructor(private store: Store<MyAppState>){}

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      this.myMatchNumber = state.matchNumber;
    })
  }

  increamentMatchNumber(){
    this.store.dispatch(increament());
  }

  decreamentMatchNumber(){
    this.store.dispatch(decrement());
  }
}
