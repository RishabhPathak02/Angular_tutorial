import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  provided_input : string = '' ;

  handleClick(event:any){
    console.log('Button clicked!', event);
  }

  onInput(event:Event){
    const input = event.target as HTMLInputElement;
    this.provided_input = input.value ;
  }
}
