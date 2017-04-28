import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }
  canActivate() {
    return this.checkLogin();
  }

  checkLogin() {
    if(this.auth.tokenIsExist()) return true;
    else this.router.navigate(['/login']);
  }
}