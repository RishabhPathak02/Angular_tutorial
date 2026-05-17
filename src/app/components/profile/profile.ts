import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
   profileImage : string =
    'profile.png';

  linkedInUrl : string =
    'https://www.linkedin.com/in/rishabhpathak02/';
}
