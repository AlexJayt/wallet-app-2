import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../services/log-in.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  error = '';

  constructor(private loginService: LogInService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      login: ['', [
        Validators.required, 
        Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,20}$/) // email format
      ]],
      pass: ['', Validators.required]
    })
  }

  logIn() {
      // creare object with entered login and password
      //this.waiting = true;
    let data = {
      "login": this.loginForm.get('login').value.toLowerCase(),
      "password": this.loginForm.get('pass').value
    }
    
      // send object
    this.loginService.login(data).subscribe(
      log => { 
          // if respone is with "OK" status
          // save received token to localStorage
          // and go to the wallets page
        if (JSON.parse(log._body).status == "ok") {
          localStorage.setItem('token', JSON.parse(log._body).authorizationToken.token);
          this.router.navigate(['/wallets']);
        }
      },
      error => this.error = error); //JSON.parse(error._body).status
  }
}
/**
 * individual@sdk.finance
 * 1
 * 
 * merchant@sdk.finance
 * 1
 * 
 * 
 */