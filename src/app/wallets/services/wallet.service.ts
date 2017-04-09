import { Injectable } from '@angular/core';
import { WalletHttpService } from './wallet.http.service';
import { Wallet } from '../classes/wallet'

@Injectable()
export class WalletService {
  r = 0;

  constructor(private walletHttpService: WalletHttpService) {
    this.getWalletsFromHttp();
    this.r++;
    console.log(this.r);
  }

  wallets: Wallet[] = [];


   getWalletsFromHttp() {
    this.walletHttpService.getWallets()
      .subscribe(
        wal => console.log(wal), //this.wallets = wal,
        error => console.log(error)
      );
  }

  getWallets() {
    return this.wallets;
  }

  deleteWallet(wallet) {
    let index = this.wallets.indexOf(wallet); // find index of this wallet 
      this.walletHttpService.deleteWallet(this.wallets[index]).subscribe(
        () => this.wallets.splice(index, 1) // delete from our array
      )
  }
}