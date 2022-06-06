import { getRandomNumberBetween } from '@/utils';

describe('utils', () => {
  describe('getRandomNumberBetween', () => {
    it('should return a random number between the given values', () => {
      const from = 1;
      const to = 10;
      const result = getRandomNumberBetween(from, to);

      expect(result).toBeGreaterThanOrEqual(from);
      expect(result).toBeLessThanOrEqual(to);
    });

    it('should return from value if it is smaller or equal than the to value', () => {
      const resultSmaller = getRandomNumberBetween(20, 2);
      const resultEquals = getRandomNumberBetween(10, 10);

      expect(resultSmaller).toBe(20);
      expect(resultEquals).toBe(10);
    });
  });
});
