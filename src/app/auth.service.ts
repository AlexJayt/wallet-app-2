import { Injectable } from '@angular/core';

@Injectable()
export class AuthService  {
  token: String;
  constructor() { }

  getToken() {
    if(!this.token) this.token = localStorage.getItem('token');
    return this.token;
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  tokenIsExist() {
    if(this.token || localStorage.getItem('token')) return true;
    else return false;
  }

  logout() {
    localStorage.clear();
    this.token = null;
    // localStorage.removeItem('token');
  }
}
