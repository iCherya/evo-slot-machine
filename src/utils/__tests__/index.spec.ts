import { getRandomNumberBetween, shuffleArray, rotateArray } from '@/utils';

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

  describe('shuffleArray', () => {
    it('should shuffle an array', () => {
      const array = new Array(100).fill(0).map((_, index) => index);
      const result = shuffleArray(array);

      expect(result).not.toEqual(array);
      expect(result).toEqual(expect.arrayContaining([...array]));
    });
  });

  describe('rotateArray', () => {
    it('should rotate an array defined times', () => {
      const array = [1, 2, 3, 4, 5];
      const result = rotateArray(array, 2);

      expect(result).toEqual([4, 5, 1, 2, 3]);
    });

    it('should rotate an array once if times is not defined', () => {
      const array = [1, 2, 3, 4, 5];
      const result = rotateArray(array);

      expect(result).toEqual([5, 1, 2, 3, 4]);
    });
  });
});
