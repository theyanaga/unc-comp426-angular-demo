import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  private name: string = "";

  constructor() { }

  public getName() : string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

}
