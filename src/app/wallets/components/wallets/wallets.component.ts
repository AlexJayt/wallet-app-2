import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

import { Wallet } from '../../classes/wallet'

import { Router } from '@angular/router'; //login

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {
  wallets: Wallet[] = [];
  
  errorMessage: string;

  constructor(private walletService: WalletService, private router: Router) { }  //login
  ngOnInit() {
    this.getWallets();
  }

  getWallets() {
    this.walletService.getWallets()
      .subscribe(
      wal => this.wallets = wal,
      error => this.errorMessage = <any>error);
  }

  delete(wallet: Wallet) {
    let index = this.wallets.indexOf(wallet);
      this.walletService.deleteWallet(this.wallets[index].id).subscribe(
        () => this.wallets.splice(index, 1)
      )
  }
}
