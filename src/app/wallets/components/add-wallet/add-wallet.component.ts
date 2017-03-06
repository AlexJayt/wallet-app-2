import { Component, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { WalletService } from '../../services/wallet.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';

import { Wallet } from '../../classes/wallet';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.css']
})
export class AddWalletComponent implements OnInit {
  addWalletForm: FormGroup;
  currency;
  currencies = [];

  constructor(private location: Location, private fb: FormBuilder, private walletService: WalletService, private currencyService: CurrencyService) { }

  ngOnInit() {
    this.createForm();
    this.getCurrencies();
  }

  createForm() {
    this.addWalletForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', [
        Validators.required, 
        Validators.pattern("^[ 0-9]+$")
      ]],
      balance: ['', [
        Validators.required, 
        Validators.pattern(/^\d+((\.|,)\d{2})$/)
      ]]
    })
  }

  // get currencies from currencies service
  getCurrencies() {
    this.currencyService.getCurrency()
                        .subscribe(
                          cur => {
                            this.currencies = cur; 
                            this.currency = this.currencies[0].name;
                          },
                          error => console.log(error));
  }

  // ser current currency
  setCurrency(currency) {
    this.currency = currency;
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // creare object with entered data (new wallet)
    let newWallet = {
      name: this.addWalletForm.get('name').value,
      code: this.addWalletForm.get('code').value,
      balance: this.addWalletForm.get('balance').value,
      currency: this.currency
    }
    console.log(newWallet);

    // post new wallet 
    this.walletService.addWallet(newWallet).subscribe(
      () => this.location.back()
    );
  }
}
