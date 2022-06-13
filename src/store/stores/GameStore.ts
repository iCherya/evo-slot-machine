import { makeAutoObservable } from 'mobx';

export class GameStore {
  public isStarted = false;
  public isWin = false;
  public winAmount = 0;

  public constructor() {
    makeAutoObservable(this);
  }

  public startGame(): void {
    this.isStarted = true;
  }

  public setWin(count: number): void {
    this.isWin = true;
    this.winAmount = count;

    setTimeout(this.resetWin.bind(this), 2000);
  }

  public resetWin(): void {
    this.isWin = false;
    this.winAmount = 0;
  }
}

export const game = new GameStore();
