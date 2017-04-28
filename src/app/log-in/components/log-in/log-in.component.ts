import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../services/log-in.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  error = '';
  buttonIsTouched = false;
  buttonIsDisabled = false;

  constructor(private loginService: LogInService, private fb: FormBuilder, 
    private router: Router, private auth: AuthService) { }

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

  onLogIn() {
    this.buttonIsTouched = true;
    this.buttonIsDisabled = true;
    if (this.loginForm.invalid) {
      this.buttonIsDisabled = false;
      return;
    };
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

        if (log.status == "ok") {
          this.auth.setToken(log.authorizationToken.token);
          console.log(log.authorizationToken.token);
          this.router.navigate(['/wallets']);
        } else this.buttonIsDisabled = false;
      },
      error => {
        this.error = error;
        this.buttonIsDisabled = false;
      });
  }
}
/**
 * individual@sdk.finance
 * 1
 * 
 * merchant@sdk.finance
 * 1
 * 
 */