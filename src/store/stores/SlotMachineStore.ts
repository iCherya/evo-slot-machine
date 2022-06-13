import { makeAutoObservable } from 'mobx';

import { DOMAIN } from '@/config';
import { ReelStore } from '@/store/stores/ReelStore';
import { user } from '@/store/stores/UserStore';
import { game } from '@/store/stores/GameStore';
import { handleError } from '@/utils';

export class SlotMachineStore {
  public reels: ReelStore[] = [];
  public isSpinning = false;
  private spinResults = new Set();
  private reelsCount = DOMAIN.reelsCount;
  private audio = DOMAIN.audio;

  public constructor() {
    this.reels = new Array(this.reelsCount).fill(null).map((_, i) => new ReelStore(i));

    makeAutoObservable(this);
  }

  public spin(): void {
    this.isSpinning = true;

    this.stopAllAudio();
    this.audio.spin.play().catch(handleError);

    this.reels.forEach((reel) => {
      reel.reelSlots[DOMAIN.reelsCount - 1].isWin = false;
    });
  }

  public spinEnd(reelIndex: number): void {
    this.spinResults.add(reelIndex);
    this.audio.spin.pause();

    this.audio.spinEnd.play().catch(handleError);
    this.audio.spinEnd.currentTime = 0;

    if (this.spinResults.size === this.reelsCount) {
      this.isSpinning = false;
      this.spinResults.clear();

      this.checkWin();
    }
  }

  private checkWin(): void {
    const items = this.reels.map((reel) => reel.reelSlots[DOMAIN.reelsCount - 1].name);
    const barItemsCount = items.filter((item) => item === 'bar').length;
    let winAmount = 0;

    if (barItemsCount) {
      winAmount += barItemsCount * this.getPriceBySlotName('bar');

      this.reels.forEach((reel) => {
        const currentItem = reel.reelSlots[DOMAIN.reelsCount - 1];
        if (currentItem.name === 'bar') {
          currentItem.isWin = true;
        }
      });

      this.audio.bar.play().catch(handleError);
    }

    const isAllItemsInRow = new Set(items).size === 1;
    if (isAllItemsInRow) {
      winAmount += items.length * this.getPriceBySlotName(items[0]) * DOMAIN.rowWinMultiplier;

      this.reels.forEach((reel) => {
        reel.reelSlots[DOMAIN.reelsCount - 1].isWin = true;
      });

      this.audio.win.play().catch(handleError);
    }

    if (winAmount) {
      user.deposit(winAmount);
      game.setWin(winAmount);
    }
  }

  private getPriceBySlotName(name: string): number {
    const { price = 1 } = DOMAIN.slotsConfig.find((el) => el.name === name) || {};

    return price;
  }

  private stopAllAudio(): void {
    this.audio.spin.pause();
    this.audio.spinEnd.pause();
    this.audio.bar.pause();
    this.audio.win.pause();

    this.audio.spin.currentTime = 0;
    this.audio.spinEnd.currentTime = 0;
    this.audio.bar.currentTime = 0;
    this.audio.win.currentTime = 0;
  }
}

export const slotMachine = new SlotMachineStore();
