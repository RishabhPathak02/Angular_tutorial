import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './components/profile/profile';
import { CommonModule } from '@angular/common';
import { Counter } from "./components/counter/counter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Profile, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tut');
  showProfile : boolean = false ;
  showCounter : boolean = false ;
  showProfile_func(){
    this.showProfile = !this.showProfile ;
  }
  openCounter_func(){
    this.showCounter = !this.showCounter ; 
  }
}
