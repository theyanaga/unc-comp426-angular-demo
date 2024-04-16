import { Injectable } from '@angular/core';
import { Card } from './card/card.component';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private state: string = "initial";
  private name: string = "";
  private cards : Card[] = [];
  private cardsToPass : Card[] = [];

  constructor() {
    let suits = ["H", "S", "D", "C"]
    let ranks = [2, 3 ,4]
    this.cards = suits.flatMap(s => {
      return ranks.map(r => new Card(s, r))
    });
   }


  public getName() : string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setState(state: string) {
    this.state = state;
  }

  public getState(state : string) {
    return state;
  }

  public getCards() : Card[] {
    return this.cards;
  }

  public isInitial() : boolean {
    return this.state === "initial";
  }

  public isPassing() : boolean {
    return this.state === "passing";
  }

  public selectCardToPass(card: Card) : void {
    this.cardsToPass.push(card);
    console.log(this.cardsToPass)
    if (this.cardsToPass.length === 3) {
      this.state = "playing";
      this.cardsToPass = [];
    }
  }

}
