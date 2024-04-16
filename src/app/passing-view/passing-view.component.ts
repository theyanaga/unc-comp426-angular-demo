import { Component } from '@angular/core';
import { ControllerService } from '../controller.service';
import { Card } from '../card/card.component';

@Component({
  selector: 'app-passing-view',
  templateUrl: './passing-view.component.html',
  styleUrls: ['./passing-view.component.css']
})
export class PassingViewComponent {

  constructor(private controller: ControllerService) {
  }

  public getCards() : Card[] {
    return this.controller.getCards();
  }

}
