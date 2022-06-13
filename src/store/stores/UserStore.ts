import { makeAutoObservable } from 'mobx';

import { DOMAIN } from '@/config';
import { handleError } from '@/utils';

export class UserStore {
  public balance = 0;
  public canSpin = false;
  public coinAudio = DOMAIN.audio.coin;

  public constructor() {
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

    this.coinAudio.play().catch(handleError);
  }

  public withdraw(): void {
    this.updateBalance(-this.balance);
    this.canSpin = false;
  }

  private updateBalance(value: number): void {
    this.balance += value;
  }
}

export const user = new UserStore();
