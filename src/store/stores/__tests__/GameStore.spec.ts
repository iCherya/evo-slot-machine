import { GameStore } from '../GameStore';

describe('GameStore', () => {
  it('should be defined', () => {
    expect(new GameStore()).toBeDefined();
  });

  it('should have a property defined initial values', () => {
    const store = new GameStore();

    expect(store.isStarted).toBe(false);
    expect(store.isSpinning).toBe(false);
    expect(store.isSpinningEnded).toBe(true);
  });

  it('should have a method startGame that sets isStarted to true', () => {
    const store = new GameStore();

    store.startGame();

    expect(store.isStarted).toBe(true);
  });

  it('should have a method startSpinning that update spinning statuses', () => {
    const store = new GameStore();

    store.startSpinning();

    expect(store.isSpinning).toBe(true);
    expect(store.isSpinningEnded).toBe(false);
  });

  it('should have a method endSpinning that update spinning statuses', () => {
    const store = new GameStore();

    store.endSpinning();

    expect(store.isSpinning).toBe(false);
    expect(store.isSpinningEnded).toBe(true);
  });
});
