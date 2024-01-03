import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Counter Component</h1>
    <p>Counter {{counter}}</p>
      <button (click)="incrementCounter(10)">+1</button>
      <button (click)="decrementCounter(10)">-1</button>
      <button (click)="resetCounter()">Reset</button>
  `
  })

export class CounterComponent {
  constructor() { }
  public counter: number=0;
  public incrementCounter(value: number):void{
    this.counter += value;
  }
  public decrementCounter (value:number): void {
    this.counter -=value;
  }

  resetCounter():void{
    this.counter = 10;
  }


}
