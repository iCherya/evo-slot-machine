import { makeAutoObservable } from 'mobx';

import { DOMAIN } from '@/config';
import { RootStoreType } from '@/store/stores';
import { ReelStore } from '@/store/stores/ReelStore';

export class SlotMachineStore {
  public reels: ReelStore[] = [];
  public reelsCount = DOMAIN.initialReelsCount;
  public isSpinning = false;
  public isInfiniteSpinMode = false;
  public infiniteSpinCount = 1;
  protected rootStore: RootStoreType;
  private middleSlotIndex = Math.floor(DOMAIN.renderSlotsPerReel / 2);
  private spinResults = new Set();

  public constructor(rootStore: RootStoreType) {
    this.rootStore = rootStore;
    this.reels = new Array(this.reelsCount).fill(null).map((_, i) => new ReelStore(i));

    makeAutoObservable(this);
  }

  public updateReelsCount(count: number): void {
    this.reelsCount = count;
    this.reels = new Array(count).fill(null).map((_, i) => new ReelStore(i));
  }

  public spin(): void {
    if (this.isInfiniteSpinMode) {
      this.updateSpinCount(-1);
    }

    if (this.infiniteSpinCount === 0) {
      this.isInfiniteSpinMode = false;
    }

    this.rootStore.user.placeBet(DOMAIN.betValue);
    this.isSpinning = true;

    this.rootStore.audio.stopAllAudio();
    this.rootStore.audio.playSound('spin');

    this.reels.forEach((reel) => {
      reel.reelSlots[this.middleSlotIndex].isWin = false;
    });
  }

  public infiniteSpin(): void {
    this.isInfiniteSpinMode = true;
    this.spin();
  }

  public spinEnd(reelIndex: number): void {
    this.spinResults.add(reelIndex);
    this.rootStore.audio.pauseSound('spin');

    this.rootStore.audio.playSound('spinEnd');
    this.rootStore.audio.setCurrentTime('spinEnd', 0);

    if (this.spinResults.size === this.reelsCount) {
      this.isSpinning = false;
      this.spinResults.clear();

      this.checkWin();

      if (this.isInfiniteSpinMode) {
        setTimeout(() => this.spin(), 700);
      }
    }
  }

  public updateSpinCount(diffValue: number): void {
    this.infiniteSpinCount += diffValue;
  }

  private checkWin(): void {
    const items = this.reels.map((reel) => reel.reelSlots[this.middleSlotIndex].name);
    const barItemsCount = items.filter((item) => item === 'bar').length;
    let winAmount = 0;

    if (barItemsCount) {
      winAmount += barItemsCount * this.getPriceBySlotName('bar');

      this.reels.forEach((reel) => {
        const currentItem = reel.reelSlots[this.middleSlotIndex];

        if (currentItem.name === 'bar') {
          currentItem.isWin = true;
        }
      });

      this.rootStore.audio.playSound('bar');
    }

    const isAllItemsInRow = new Set(items).size === 1;
    if (isAllItemsInRow) {
      winAmount += items.length * this.getPriceBySlotName(items[0]) * DOMAIN.rowWinMultiplier;

      this.reels.forEach((reel) => {
        reel.reelSlots[this.middleSlotIndex].isWin = true;
      });

      this.rootStore.audio.playSound('win');
    }

    if (winAmount) {
      this.rootStore.user.deposit(winAmount);
      this.rootStore.game.setWin(winAmount);
    }
  }

  private getPriceBySlotName(name: string): number {
    const { price = 1 } = DOMAIN.slotsConfig.find((el) => el.name === name) || {};

    return price;
  }
}
