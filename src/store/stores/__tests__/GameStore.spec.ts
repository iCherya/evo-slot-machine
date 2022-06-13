import { GameStore } from '../GameStore';

describe('GameStore', () => {
  it('should be defined', () => {
    expect(new GameStore()).toBeDefined();
  });

  it('should have a property defined initial values', () => {
    const store = new GameStore();

    expect(store.isStarted).toBe(false);
    expect(store.isWin).toBe(false);
    expect(store.winAmount).toBe(0);
    expect(store.isSettingsOpened).toBe(false);
  });

  it('should have a method startGame that sets isStarted to true', () => {
    const store = new GameStore();

    store.startGame();

    expect(store.isStarted).toBe(true);
  });

  it('should have a method setWin that sets isWin to true and winAmount to the appropriate value', () => {
    const store = new GameStore();

    store.setWin(10);

    expect(store.isWin).toBe(true);
    expect(store.winAmount).toBe(10);
  });

  it('should have a method resetWin that sets isWin to false and winAmount to 0', () => {
    const store = new GameStore();

    store.setWin(10);
    store.resetWin();

    expect(store.isWin).toBe(false);
    expect(store.winAmount).toBe(0);
  });

  it('should have a method toggleSettings that sets isSettingsOpened to true', () => {
    const store = new GameStore();

    store.toggleSettings();
    expect(store.isSettingsOpened).toBe(true);

    store.toggleSettings();
    expect(store.isSettingsOpened).toBe(false);
  });
});
