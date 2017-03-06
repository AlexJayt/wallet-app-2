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
  // our array of wallets
  wallets: Wallet[] = [];
  
  errorMessage: string;

  constructor(private walletService: WalletService, private router: Router) { }  //login
  ngOnInit() {
    this.getWallets();
  }
  // get wallets from service
  getWallets() {
    this.walletService.getWallets()
      .subscribe(
      wal => this.wallets = wal,
      error => this.errorMessage = <any>error);
  }

  // delete wallet 
  delete(wallet: Wallet) {
    // find index of this wallet 
    let index = this.wallets.indexOf(wallet);
    // delete requesr to server
      this.walletService.deleteWallet(this.wallets[index].id).subscribe(
        // delete from our array
        () => this.wallets.splice(index, 1)
      )
  }
}
