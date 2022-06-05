import * as React from 'react';

import { stores } from './stores';

import type { ProviderProps } from '@/types';

const StoreContext = React.createContext(stores);

export const StoreProvider: React.FC<ProviderProps> = ({ children }) => (
  <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
);

export const useStore = (): typeof stores => {
  const store = React.useContext(StoreContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store;
};
