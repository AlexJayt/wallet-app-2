import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'

export const routes: Routes = [
  { path: 'wallets', component: HomeComponent, loadChildren: 'app/wallets/wallets.module#WalletsModule' },
  { path: 'cards', component: HomeComponent, loadChildren: 'app/cards/cards.module#CardsModule' },
  { path: '', redirectTo: '/wallets', pathMatch: 'full' }
]