import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { CardsComponent } from './components/cards/cards.component';
import { CardService } from './services/card.service';

import { routes } from './cards-routing';
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    RouterModule.forChild(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    CardsComponent,
  ],
  providers: [
    CardService,
  ]
})
export class CardsModule { }
