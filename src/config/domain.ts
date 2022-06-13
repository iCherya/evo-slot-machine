export const DOMAIN = {
  currency: '€',
  depositValue: 100,
  betValue: 10,
  rowWinMultiplier: 2,
  reelsCount: 3,
  turnoverCount: 10,
  turnoverDuration: 200,
  slotsConfig: [
    { id: 1, price: 4, image: 'assets/slots/slot-1-512.png', name: 'cherry', isWin: false },
    { id: 2, price: 8, image: 'assets/slots/slot-2-512.png', name: 'dollar', isWin: false },
    { id: 3, price: 16, image: 'assets/slots/slot-3-512.png', name: 'seven', isWin: false },
    { id: 4, price: 32, image: 'assets/slots/slot-4-512.png', name: 'grape', isWin: false },
    { id: 5, price: 10, image: 'assets/slots/slot-5-512.png', name: 'bar', isWin: false },
  ],
  audio: {
    coin: new Audio('https://cdn.freesound.org/previews/512/512216_10756146-lq.mp3'),
    spin: new Audio('https://cdn.freesound.org/previews/614/614393_13623969-lq.mp3'),
    spinEnd: new Audio('https://cdn.freesound.org/previews/56/56246_91374-lq.mp3'),
    bar: new Audio('https://cdn.freesound.org/previews/487/487436_10491935-lq.mp3'),
    win: new Audio('https://cdn.freesound.org/previews/73/73701_988961-lq.mp3'),
  },
};
