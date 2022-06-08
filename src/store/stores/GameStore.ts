import { makeAutoObservable } from 'mobx';

export class GameStore {
  private _isStarted = false;
  private _isSpinning = false;
  private _isSpinningEnded = true;

  public constructor() {
    makeAutoObservable(this);
  }

  public get isStarted(): boolean {
    return this._isStarted;
  }

  public get isSpinning(): boolean {
    return this._isSpinning;
  }

  public get isSpinningEnded(): boolean {
    return this._isSpinningEnded;
  }

  public startGame(): void {
    this._isStarted = true;
  }

  public startSpinning(): void {
    this._isSpinning = true;
    this._isSpinningEnded = false;
  }

  public endSpinning(): void {
    this._isSpinning = false;
    this._isSpinningEnded = true;
  }
}
