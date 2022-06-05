export const getRandomNumberBetween = (fromNumber: number, toNumber: number): number => {
  const from = Math.ceil(fromNumber);
  const to = Math.floor(toNumber);

  if (to <= from) {
    return from;
  }

  return Math.floor(Math.random() * (to - from + 1) + from);
};
