import { makeAutoObservable } from 'mobx';

export class UserStore {
  private _balance = 0;
  private _canSpin = false;

  public constructor() {
    makeAutoObservable(this);
  }

  public get balance(): number {
    return this._balance;
  }

  public get canSpin(): boolean {
    return this._canSpin;
  }

  public checkCanSpin(value: number): void {
    this._canSpin = this._balance >= value;
  }

  public placeBet(value: number): void {
    this.checkCanSpin(value);

    if (this._canSpin) {
      this.updateBalance(-value);
    }
  }

  public deposit(value: number): void {
    this.updateBalance(value);
    this._canSpin = true;
  }

  public withdraw(): void {
    this.updateBalance(-this._balance);
    this._canSpin = false;
  }

  private updateBalance(value: number): void {
    this._balance += value;
  }
}
