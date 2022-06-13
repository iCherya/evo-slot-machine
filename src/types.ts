export interface IProviderProps {
  children?: React.ReactNode;
}

export interface ISlotData {
  id: number;
  price: number;
  image: string;
  name: string;
  isWin: boolean;
}
