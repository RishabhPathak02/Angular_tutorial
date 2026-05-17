import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loops',
  imports: [CommonModule],
  templateUrl: './loops.html',
  styleUrl: './loops.css',
})
export class Loops {
  users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];

}
