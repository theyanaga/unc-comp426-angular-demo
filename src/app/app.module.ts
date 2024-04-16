import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitialViewComponent } from './initial-view/initial-view.component';
import { PassingViewComponent } from './passing-view/passing-view.component';
import { CardComponent } from './card/card.component';
import { PlayingViewComponent } from './playing-view/playing-view.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialViewComponent,
    PassingViewComponent,
    CardComponent,
    PlayingViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
