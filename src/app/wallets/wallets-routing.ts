import { Routes } from '@angular/router';
import { WalletsComponent } from './components/wallets/wallets.component';
import { AddWalletComponent } from './components/add-wallet/add-wallet.component';

export const routes: Routes = [
  { path: '', component: WalletsComponent },
  { path: 'add', component: AddWalletComponent }
]