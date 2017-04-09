import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadChildren: 'app/log-in/log-in.module#LogInModule' },
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: '**', redirectTo: '' }
]