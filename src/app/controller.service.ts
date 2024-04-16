import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private state: string = "initial";
  private name: string = "";

  constructor() { }

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

  public isInitial() : boolean {
    return this.state === "initial";
  }

  public isPassing() : boolean {
    return this.state === "passing";
  }

}
