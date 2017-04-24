import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate() {
    return this.checkLogin();
  }

  checkLogin() {
    if(localStorage.getItem('token')) return true;
    this.router.navigate(['/login']);
  }
}