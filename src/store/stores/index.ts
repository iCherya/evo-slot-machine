import { GameStore, game } from './GameStore';
import { UserStore, user } from './UserStore';
import { SlotMachineStore, slotMachine } from './SlotMachineStore';

class RootStore {
  public game: GameStore;
  public user: UserStore;
  public slotMachine: SlotMachineStore;

  public constructor() {
    this.game = game;
    this.user = user;
    this.slotMachine = slotMachine;
  }
}

export type RootStoreType = RootStore;
export const rootStore = new RootStore();
