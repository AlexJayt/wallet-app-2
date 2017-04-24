import { Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { LoginGuardService } from './login-guard.service'

export const routes: Routes = [
  { path: 'login', canActivate: [LoginGuardService], loadChildren: 'app/log-in/log-in.module#LogInModule' },
  { path: '', canActivate: [AuthGuardService], loadChildren: 'app/home/home.module#HomeModule' },
  { path: '**', redirectTo: '' }
]