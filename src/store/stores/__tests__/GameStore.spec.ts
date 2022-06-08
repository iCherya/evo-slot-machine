import { GameStore } from '../GameStore';

describe('GameStore', () => {
  it('should be defined', () => {
    expect(new GameStore()).toBeDefined();
  });

  it('should have a property isStarted with initial false value', () => {
    const store = new GameStore();
    expect(store.isStarted).toBe(false);
  });

  it('should have a method startGame that sets isStarted to true', () => {
    const store = new GameStore();

    store.startGame();
    expect(store.isStarted).toBe(true);
  });
});
