import { makeAutoObservable } from 'mobx';

import { DOMAIN } from '@/config';
import { shuffleArray, rotateArray } from '@/utils';

import { ISlotData } from '@/types';

export class ReelStore {
  public reelIndex: number;
  public reelSlots = [] as ISlotData[];

  public constructor(reelIndex: number) {
    this.reelIndex = reelIndex;
    this.init();

    makeAutoObservable(this);
  }

  public rotateReel(): void {
    this.reelSlots = rotateArray(this.reelSlots);
  }

  private init(): void {
    const reelSlots = DOMAIN.slotsConfig
      .sort((a, b) => b.price - a.price)
      .reduce((acc, curr, index) => {
        let timesPerSlotType = index + 1;

        while (timesPerSlotType > 0) {
          acc.push(curr);
          timesPerSlotType -= 1;
        }

        return acc;
      }, [] as ISlotData[])
      .map((el, id) => ({ ...el, id }));

    this.reelSlots = shuffleArray(reelSlots);
  }
}
