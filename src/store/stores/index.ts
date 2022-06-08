import { GameStore } from './GameStore';
import { UserStore } from './UserStore';

class RootStore {
  public game: GameStore;
  public user: UserStore;

  public constructor() {
    this.game = new GameStore();
    this.user = new UserStore();
  }
}

export type RootStoreType = RootStore;
export const rootStore = new RootStore();
