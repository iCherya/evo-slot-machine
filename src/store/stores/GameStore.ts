import { makeAutoObservable } from 'mobx';

export class GameStore {
  public isStarted = false;
  public winCount = 0;
  public showWinAnimation = false;

  public constructor() {
    makeAutoObservable(this);
  }

  public startGame(): void {
    this.isStarted = true;
  }

  public hasWon(count: number): void {
    this.showWinAnimation = true;
    this.winCount = count;

    setTimeout(this.resetWin.bind(this), 2000);
  }

  private resetWin(): void {
    this.showWinAnimation = false;
    this.winCount = 0;
  }
}

export const game = new GameStore();
