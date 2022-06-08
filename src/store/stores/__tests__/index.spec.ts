import { rootStore } from '..';
import { GameStore } from '@/store/stores/GameStore';

describe('RootStore', () => {
  it('should export instance of the root store', () => {
    expect(rootStore).toBeDefined();
  });

  it('should contain a property app with initial value of GameStore', () => {
    expect(rootStore.game).toBeInstanceOf(GameStore);
  });
});
