import { Component, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { WalletService } from '../../services/wallet.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Wallet } from '../../classes/wallet';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.css']
})
export class AddWalletComponent implements OnInit {
  addWalletForm: FormGroup;

  constructor(private location: Location, private fb: FormBuilder, private walletService: WalletService) { }

  ngOnInit() {
    this.createForm();
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

  setCurrency(currency) {
    //this.newCarrency = currency;
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    let newWallet = {
      name: this.addWalletForm.get('name').value,
      code: this.addWalletForm.get('code').value,
      balance: this.addWalletForm.get('balance').value,
      currency: 'gg',
    }
    console.log(newWallet);
    this.walletService.addWallet(newWallet).subscribe(
      () => this.location.back()
    );
  }
}
