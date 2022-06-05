import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';

import type { IProviderProps } from '@/types';
import { StoreProvider, StoreContext, useStore } from '../index';

jest.mock('@/store/stores', () => ({
  rootStore: {
    app: { isGameStarted: true },
  },
}));

describe('store utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('StoreProvider', () => {
    it('should render children', () => {
      const children = <div data-testid="child" />;
      const { container } = render(<StoreProvider>{children}</StoreProvider>);

      expect(container.querySelector('[data-testid="child"]')).toBeDefined();
    });

    it('should provide store to consumed components', () => {
      const { getByText } = render(
        <StoreProvider>
          <StoreContext.Consumer>
            {(store) => <span>Game status: {store?.app.isGameStarted ? 'started' : 'not started'}</span>}
          </StoreContext.Consumer>
        </StoreProvider>,
      );

      expect(getByText('Game status: started')).toBeTruthy();
    });
  });

  describe('useStore', () => {
    it('should return the full store', () => {
      const wrapper: React.FC<IProviderProps> = ({ children }) => {
        return <StoreProvider>{children}</StoreProvider>;
      };

      const { result } = renderHook(useStore, { wrapper });

      expect(result.current).toStrictEqual({ app: { isGameStarted: true } });
    });
  });
});
