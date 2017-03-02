import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routes } from './app-routing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // , {useHash: false}
  ],
  providers: [
  ],
 bootstrap: [AppComponent]
})
export class AppModule { }