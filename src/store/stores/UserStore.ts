import { makeAutoObservable } from 'mobx';

import { RootStoreType } from '@/store/stores';

export class UserStore {
  public balance = 0;
  public canSpin = false;
  protected rootStore: RootStoreType;

  public constructor(rootStore: RootStoreType) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  public checkCanSpin(value: number): void {
    this.canSpin = this.balance >= value;
  }

  public placeBet(value: number): void {
    this.checkCanSpin(value);

    if (this.canSpin) {
      this.updateBalance(-value);
    }
  }

  public deposit(value: number): void {
    this.updateBalance(value);
    this.canSpin = true;

    this.rootStore.audio.playSound('coin');
  }

  public withdraw(): void {
    this.updateBalance(-this.balance);
    this.canSpin = false;
  }

  private updateBalance(value: number): void {
    this.balance += value;
  }
}
