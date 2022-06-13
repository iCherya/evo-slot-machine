export const getRandomNumberBetween = (fromNumber: number, toNumber: number): number => {
  const from = Math.ceil(fromNumber);
  const to = Math.floor(toNumber);

  if (to <= from) {
    return from;
  }

  return Math.floor(Math.random() * (to - from + 1) + from);
};

export const shuffleArray = <T>(array: T[]): T[] =>
  array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

export const rotateArray = <T>(array: T[], times = 1): T[] => {
  let i = 0;

  while (i < times) {
    const last = array.pop();

    if (last) {
      array.unshift(last);
    }
    i += 1;
  }

  return array;
};

export const handleError = (err: Error): void => {
  // eslint-disable-next-line no-console
  console.error('Error:', err);
};
