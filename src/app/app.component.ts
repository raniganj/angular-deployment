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
  myCounter: number = 0;

  constructor(private store: Store<MyAppState>){}

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      console.log(state);
      this.myCounter = state.counter;
    })
  }

  increamentCounter(){
    this.store.dispatch(increament());
  }

  decreamentCounter(){
    this.store.dispatch(decrement());
  }
}
