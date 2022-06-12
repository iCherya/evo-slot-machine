import { GameStore } from './GameStore';
import { UserStore } from './UserStore';
import { SlotMachineStore } from './SlotMachineStore';

class RootStore {
  public game: GameStore;
  public user: UserStore;
  public slotMachine: SlotMachineStore;

  public constructor() {
    this.game = new GameStore();
    this.user = new UserStore();
    this.slotMachine = new SlotMachineStore();
  }
}

export type RootStoreType = RootStore;
export const rootStore = new RootStore();
