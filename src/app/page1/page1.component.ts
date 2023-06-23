import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from '../store/app.state';
import { Module1User, module1Action1, module1Action2WithParam } from '../store/module1.reducer';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  module1User : Module1User | undefined;

  constructor(private store: Store<MyAppState>) { }

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      this.module1User = state.module1User;
    })

  }

  module1Action1(){
    this.store.dispatch(module1Action1())
  }

  module1Action2WithParam(){
    this.store.dispatch(module1Action2WithParam({p1:20}))
  }
}
