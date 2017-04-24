import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MoneyPipe } from '../pipes/money.pipe';


// components
import { WalletsComponent } from './components/wallets/wallets.component';
import { AddWalletComponent } from './components/add-wallet/add-wallet.component';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';

// services
import { WalletHttpService } from './services/wallet.http.service';
import { CurrencyService } from './services/currency.service';
import { WalletService } from './services/wallet.service';

// routes
import { routes } from './wallets-routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WalletsComponent,
    AddWalletComponent,
    CurrencySelectComponent,
    MoneyPipe
  ],
  providers: [
    WalletHttpService,
    CurrencyService,
    WalletService
  ]
})
export class WalletsModule { }
