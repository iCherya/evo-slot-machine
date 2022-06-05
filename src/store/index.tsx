import * as React from 'react';

import { RootStoreType, rootStore } from './stores';

import type { IProviderProps } from '@/types';

export const StoreContext = React.createContext<RootStoreType | null>(null);

export const StoreProvider: React.FC<IProviderProps> = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);

export const useStore = (): RootStoreType => {
  const store = React.useContext(StoreContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store;
};
