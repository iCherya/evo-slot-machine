import { makeAutoObservable } from 'mobx';
import { ReelStore } from '@/store/stores/ReelStore';

const reelsCount = 3;

export class SlotMachineStore {
  private _reels: ReelStore[] = [];
  private _isSpinning = false;
  private _spinResults = new Set();
  private _isWin = false;

  public constructor() {
    makeAutoObservable(this);

    this.init();
  }

  public finishRotation(reelIndex: number): void {
    this._spinResults.add(reelIndex);

    if (this._spinResults.size === reelsCount) {
      console.log('🚀 all reels finished rotation');

      this._isSpinning = false;
      this._spinResults.clear();

      this._checkWin();
    }
  }

  public spin(): void {
    this._isSpinning = true;

    this._reels.forEach((reel) => reel.startRotate());
  }

  private _checkWin(): void {
    console.log('🎉 check win');

    const items = this._reels.map(({ reelsSlots }) => reelsSlots[2].name);
    console.log(items);
  }

  private init(): void {
    this._reels = new Array(reelsCount).fill(null).map((_, i) => new ReelStore(this, i));
  }

  public get reels(): ReelStore[] {
    return this._reels;
  }

  public get isSpinning(): boolean {
    return this._isSpinning;
  }
}
