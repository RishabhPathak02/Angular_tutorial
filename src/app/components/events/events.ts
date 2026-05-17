import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  imports: [FormsModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  provided_input : string = '' ;
  name : string = '' ; 

  handleClick(event:any){
    console.log('Button clicked!', event);
  }

  onInput(event:Event){
    const input = event.target as HTMLInputElement;
    this.provided_input = input.value ;
  }
}
