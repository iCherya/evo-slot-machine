import { makeAutoObservable } from 'mobx';
import { SlotMachineStore } from '@/store/stores/SlotMachineStore';

import { CONTENT } from '@/config/content';
import { ISlotData } from '@/types';
import { shuffleArray, rotateArray } from '@/utils';

export class ReelStore {
  private _slotMachine: SlotMachineStore;
  private _reelIndex: number;
  private _reelSlots = [] as ISlotData[];
  private _isRotating = false;

  private _resultedSlotName = '';

  public constructor(slotMachine: SlotMachineStore, reelIndex: number) {
    this._slotMachine = slotMachine;
    this._reelIndex = reelIndex;
    this._init();

    makeAutoObservable(this);
  }

  public startRotate(): void {
    this._isRotating = true;
  }

  public stopRotate(): void {
    this._isRotating = false;
  }

  public rotateReel(): void {
    this._reelSlots = rotateArray(this._reelSlots);
  }

  private _init(): void {
    const slotsConfigData = CONTENT.domain.slotsConfig;
    const reelSlots = slotsConfigData
      .sort((a, b) => b.price - a.price)
      .reduce((acc, curr, index) => {
        const currentTypeSlots = [];
        let timesPerSlotType = index + 1;

        while (timesPerSlotType > 0) {
          currentTypeSlots.push(curr);
          timesPerSlotType -= 1;
        }

        return [...acc, ...currentTypeSlots];
      }, [] as ISlotData[])
      .map((el, id) => ({ ...el, id }));

    this._reelSlots = shuffleArray(reelSlots);
  }

  public get reelIndex(): number {
    return this._reelIndex;
  }

  public get reelsSlots(): ISlotData[] {
    return this._reelSlots;
  }

  public get isRotating(): boolean {
    return this._isRotating;
  }
}
