import { Component, OnInit } from '@angular/core';
import { WalletHttpService } from '../../services/wallet.http.service';

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

  constructor(private walletService: WalletHttpService, private router: Router) { }  //login
  ngOnInit() {
    this.getWallets();
  }
  // get wallets from service
  getWallets() {
    this.walletService.getWallets()
      .subscribe(
      wal => this.wallets = wal.coins,
      error => this.errorMessage = <any>error);
  }

  // delete wallet 
  delete(wallet: Wallet) {
    let index = this.wallets.indexOf(wallet);  // find index of this wallet 
    // delete request to server
    this.walletService.deleteWallet(this.wallets[index]).subscribe( 
        () => this.wallets.splice(index, 1) // delete from our array
      )
  }
}
