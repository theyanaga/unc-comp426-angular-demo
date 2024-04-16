import { Component } from '@angular/core';
import { ControllerService } from './controller.service';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comp426-demo';


  constructor(private controller: ControllerService) {}

  public isInitial() : boolean {
    return this.controller.isInitial();
  }

  public isPassing() : boolean {
    return this.controller.isPassing();
  }

  public isPlaying() : boolean {
    return this.controller.isPlaying();
  }

}
