import { AppStore } from '../AppStore';

describe('AppStore', () => {
  it('should be defined', () => {
    expect(new AppStore()).toBeDefined();
  });

  it('should have a property isGameStarted with initial false value', () => {
    const store = new AppStore();
    expect(store.isGameStarted).toBe(false);
  });

  it('should have a method startGame that sets isGameStarted to true', () => {
    const store = new AppStore();

    store.startGame();
    expect(store.isGameStarted).toBe(true);
  });
});
