import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routes } from './app-routing';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { LoginGuardService } from './login-guard.service';
import { MoneyPipe } from './pipes/money.pipe';

@NgModule({
  declarations: [
    AppComponent,
    //MoneyPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // , {useHash: false}
  ],
  providers: [
    AuthGuardService,
    LoginGuardService
  ],
 bootstrap: [AppComponent]
})
export class AppModule { }