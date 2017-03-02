import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/wallets', pathMatch: 'full' },
  { path: 'wallets', loadChildren: 'app/wallets/wallets.module#WalletsModule' },
  { path: 'cards', loadChildren: 'app/cards/cards.module#CardsModule' },
  { path: 'login', loadChildren: 'app/log-in/log-in.module#LogInModule'}
]