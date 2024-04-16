import { Component } from '@angular/core';
import { ControllerService } from '../controller.service';
import { Card } from '../card/card.component';

@Component({
  selector: 'app-playing-view',
  templateUrl: './playing-view.component.html',
  styleUrls: ['./playing-view.component.css']
})
export class PlayingViewComponent {

  constructor(private controller: ControllerService) {
  }

  public getCards() : Card[] {
    return this.controller.getCards();
  }

  public handleCardSelectionForPlaying(card: Card) {
    this.controller.selectCardToPlay(card);

  }
}
