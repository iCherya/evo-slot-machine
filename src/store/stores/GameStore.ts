import { makeAutoObservable } from 'mobx';

export class GameStore {
  public isStarted = false;
  public isSettingsOpened = false;
  public isWin = false;
  public winAmount = 0;

  public constructor() {
    makeAutoObservable(this);
  }

  public startGame(): void {
    this.isStarted = true;
  }

  public toggleSettings(): void {
    this.isSettingsOpened = !this.isSettingsOpened;
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
