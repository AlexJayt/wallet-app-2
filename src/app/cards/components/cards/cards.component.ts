import { Component, OnInit } from '@angular/core';
import { Card } from '../../classes/card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];
  errorMessage: string;

  constructor(private cardsService: CardService) { }

  ngOnInit() {
    this.cards.length = 0;
    this.getCards();
  }

  // get array of cards from http
  getCards() {
    this.cardsService.getCards()
      .subscribe(
        card => this.cards = card,
        error => this.errorMessage = <any>error
      );
  }

  // select or deselect card
  select(card: Card) {
    card.selected = !card.selected;
  }

  // checking whether at least one card is selected
  isSelected() {
    for (let i = 0; i < this.cards.length; i++)
      if (this.cards[i].selected) return true;
    return false;
  }

  // checking card is selected
  // if true, delete this card
  delete() {
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].selected) {
        this.cardsService.deleteCard(this.cards[i].id).subscribe(() => { })
        this.cards.splice(i, 1);
        i--;
      }
    }
  }

}