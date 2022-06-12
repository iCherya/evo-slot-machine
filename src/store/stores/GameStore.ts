import { makeAutoObservable } from 'mobx';

export class GameStore {
  private _isStarted = false;

  public constructor() {
    makeAutoObservable(this);
  }

  public get isStarted(): boolean {
    return this._isStarted;
  }

  public startGame(): void {
    this._isStarted = true;
  }
}
