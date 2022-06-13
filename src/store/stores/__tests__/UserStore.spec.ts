import { UserStore } from '../UserStore';

const mockPlay = jest.fn(
  () =>
    new Promise<void>((resolve) => {
      resolve();
    }),
);

HTMLMediaElement.prototype.play = mockPlay;

describe('UserStore', () => {
  it('should be defined', () => {
    expect(new UserStore()).toBeDefined();
  });

  it('should have a property defined initial values', () => {
    const store = new UserStore();

    expect(store.balance).toBe(0);
    expect(store.canSpin).toBe(false);
  });

  describe('deposit', () => {
    it('should increase user balance and set canSpin to true', () => {
      const store = new UserStore();

      store.deposit(42);
      expect(store.balance).toBe(42);
      expect(store.canSpin).toBe(true);
    });

    it('should play coin audio', () => {
      const store = new UserStore();

      store.deposit(42);
      expect(mockPlay).toHaveBeenCalled();
    });
  });

  describe('withdraw', () => {
    it('should reset user balance and set canSpin to false', () => {
      const store = new UserStore();

      store.deposit(42);
      expect(store.balance).toBe(42);

      store.withdraw();
      expect(store.balance).toBe(0);
      expect(store.canSpin).toBe(false);
    });
  });

  describe('checkCanSpin', () => {
    it('should set canSpin to false if bet amount is bigger than balance', () => {
      const store = new UserStore();

      expect(store.balance).toBe(0);

      store.checkCanSpin(10);
      expect(store.canSpin).toBe(false);
    });

    it('should set canSpin to true if bet amount is less or equal to the balance', () => {
      const store = new UserStore();

      store.deposit(10);
      expect(store.balance).toBe(10);

      store.checkCanSpin(5);
      expect(store.canSpin).toBe(true);
    });
  });

  describe('placeBet', () => {
    it('should decrees balance if canSpin is true', () => {
      const store = new UserStore();

      store.deposit(42);
      expect(store.canSpin).toBe(true);

      store.placeBet(10);
      expect(store.balance).toBe(32);
    });

    it('should not decrees balance if canSpin is false', () => {
      const store = new UserStore();

      expect(store.canSpin).toBe(false);

      store.deposit(42);
      expect(store.canSpin).toBe(true);

      store.placeBet(52);
      expect(store.canSpin).toBe(false);
      expect(store.balance).toBe(42);
    });
  });
});
