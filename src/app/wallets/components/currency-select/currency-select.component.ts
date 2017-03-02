import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';


@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.css'],
  host: {
    '(document:click)': 'close($event)',
  }
})
export class CurrencySelectComponent implements OnInit {
  errorMessage: string;
  currencies = [];
  @Output() selectedCurrency = new EventEmitter;
  selected;
  hidden = true;

  constructor(private currencyService: CurrencyService, private _eref: ElementRef) {
  }

  ngOnInit() {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.getCurrency()
                        .subscribe(
                          cur => {
                            this.currencies = cur; 
                            this.selected = this.currencies[0].name;
                            this.setCurrency()
                          },
                          error => this.errorMessage = <any>error);
  }

  showList() {
    this.hidden = !this.hidden;
  }
  close() {
    if (!this._eref.nativeElement.contains(event.target))
      this.hidden = true;
  }

  select(currency) {
    this.selected = currency.name;
    this.hidden = true;
    this.setCurrency();
  }

  setCurrency() {
    this.selectedCurrency.emit(this.selected);
  }
}