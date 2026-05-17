import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count : WritableSignal<number> = signal(0) ;
  doubleCount = computed(()=> this.count() * 2) ;

  constructor(){
    effect(()=>{
      console.log('Count is: ', this.count()) ;
    });
  }

  increment(){
    this.count.update((c)=> c+1) ;
  }
  decrement(){
    this.count.update((c)=> c-1) ;
  }
  reset(){
    this.count.set(0) ;
  }
}
