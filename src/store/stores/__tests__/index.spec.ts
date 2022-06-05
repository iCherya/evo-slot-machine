import { rootStore } from '..';
import { AppStore } from '@/store/stores/AppStore';

describe('RootStore', () => {
  it('should export instance of the root store', () => {
    expect(rootStore).toBeDefined();
  });

  it('should contain a property app with initial value of AppStore', () => {
    expect(rootStore.app).toBeInstanceOf(AppStore);
  });
});
