import { makeAutoObservable } from 'mobx';

import { DOMAIN } from '@/config';
import { ReelStore } from '@/store/stores/ReelStore';
import { user } from '@/store/stores/UserStore';
import { game } from '@/store/stores/GameStore';

export class SlotMachineStore {
  public reels: ReelStore[] = [];
  public isSpinning = false;
  private spinResults = new Set();
  private reelsCount = DOMAIN.reelsCount;

  public constructor() {
    this.reels = new Array(this.reelsCount).fill(null).map((_, i) => new ReelStore(i));

    makeAutoObservable(this);
  }

  public spin(): void {
    this.isSpinning = true;
  }

  public spinEnd(reelIndex: number): void {
    this.spinResults.add(reelIndex);

    if (this.spinResults.size === this.reelsCount) {
      console.log('🚀 all reels finished rotation');

      this.isSpinning = false;
      this.spinResults.clear();

      this.checkWin();
    }
  }

  private checkWin(): void {
    const items = this.reels.map((reel) => reel.reelSlots[2].name);
    const barItemsCount = items.filter((item) => item === 'bar').length;
    let winAmount = 0;

    if (barItemsCount) {
      winAmount += barItemsCount * this.getPriceBySlotName('bar');
    }

    const isAllItemsInRow = new Set(items).size === 1;
    if (isAllItemsInRow) {
      winAmount += items.length * this.getPriceBySlotName(items[0]) * DOMAIN.rowWinMultiplier;
    }

    if (winAmount) {
      user.deposit(winAmount);
      game.hasWon(winAmount);
    }
  }

  private getPriceBySlotName(name: string): number {
    const { price = 1 } = DOMAIN.slotsConfig.find((el) => el.name === name) || {};

    return price;
  }
}

export const slotMachine = new SlotMachineStore();
