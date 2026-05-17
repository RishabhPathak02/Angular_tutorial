import { Routes } from '@angular/router';
import { Profile } from './components/profile/profile';
import { Events } from './components/events/events';
import { Loops } from './components/loops/loops';

export const routes: Routes = [
     { path: 'events', component: Events },
     { path : 'loops' , component : Loops}
];
