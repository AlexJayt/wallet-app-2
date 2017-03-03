import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';


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
  @Input() list;
  @Output() selectedItem = new EventEmitter;
  @Input() selected;
  hidden = true;

  constructor(private _eref: ElementRef) {
  }

  ngOnInit() {  }  

  showList() {
    this.hidden = !this.hidden;
  }
  close() {
    if (!this._eref.nativeElement.contains(event.target))
      this.hidden = true;
  }

  select(item) {
    this.selected = item.name;
    this.hidden = true;
    this.setItem();
  }

  setItem() {
    this.selectedItem.emit(this.selected);
  }
}