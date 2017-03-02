import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// im memory api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

// components
import { WalletsComponent } from './components/wallets/wallets.component';
import { AddWalletComponent } from './components/add-wallet/add-wallet.component';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';

// services
import { WalletService } from './services/wallet.service';
import { CurrencyService } from './services/currency.service';

// routes
import { routes } from './wallets-routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    WalletsComponent,
    AddWalletComponent,
    CurrencySelectComponent
  ],
  providers: [
    WalletService,
    CurrencyService
  ]
})
export class WalletsModule { }
