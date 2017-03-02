import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LogInComponent } from './components/log-in/log-in.component';

import { RouterModule } from '@angular/router';
import { routes } from './log-in-routing';
import { LogInService } from './services/log-in.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [LogInComponent],
  providers: [
    LogInService
  ]
})
export class LogInModule { }
