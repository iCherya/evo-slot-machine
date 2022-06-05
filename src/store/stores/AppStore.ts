import { makeAutoObservable } from 'mobx';

export class AppStore {
  private _isGameStarted = false;

  public constructor() {
    makeAutoObservable(this);
  }

  public get isGameStarted(): boolean {
    return this._isGameStarted;
  }

  public startGame(): void {
    this._isGameStarted = true;
  }
}
