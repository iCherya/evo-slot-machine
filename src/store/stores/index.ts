import { AppStore } from './AppStore';

class RootStore {
  public app: AppStore;

  public constructor() {
    this.app = new AppStore();
  }
}

export type RootStoreType = RootStore;
export const rootStore = new RootStore();
