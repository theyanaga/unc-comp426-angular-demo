import { Component, Input } from '@angular/core';


export class Card {
  suit: string;
  rank: number;

  constructor(suit: string, rank: number) {
    this.suit= suit;
    this.rank = rank;
  }



}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input('card') card: Card = new Card("", 1);

  public getSuit() : string {
    return this.card.suit;
  }
  
  public getRank() : number {
    return this.card.rank;
  }

  public getImageUrl() : string {
    return "https://deckofcardsapi.com/static/img/" + this.getRank() + this.getSuit() + ".png";
  }
}
