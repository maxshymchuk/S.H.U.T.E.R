import { IRender } from './interfaces';

export default class Render implements IRender {
  private _target: Element;

  constructor() {

  }

  public set target(query: string) {
    const target = document.querySelector(query);
    if (!target) throw 'Target not exist';
    this._target = target;
  }
}
