import { GameStore } from './GameStore';
import { UserStore } from './UserStore';
import { SlotMachineStore } from './SlotMachineStore';
import { AudioStore } from './AudioStore';

class RootStore {
  public game: GameStore;
  public slotMachine: SlotMachineStore;
  public user: UserStore;
  public audio: AudioStore;

  public constructor() {
    this.game = new GameStore();
    this.slotMachine = new SlotMachineStore(this);
    this.user = new UserStore(this);
    this.audio = new AudioStore();
  }
}

export type RootStoreType = RootStore;
export const rootStore = new RootStore();
