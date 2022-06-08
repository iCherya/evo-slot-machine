import { GameStore } from './GameStore';

class RootStore {
  public game: GameStore;

  public constructor() {
    this.game = new GameStore();
  }
}

export type RootStoreType = RootStore;
export const rootStore = new RootStore();
