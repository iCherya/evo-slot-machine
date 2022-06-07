import { render } from '@testing-library/react';

import { App } from '@/components/App';
import { useStore } from '@/store';

const mockedUseStore = useStore as jest.Mock;

jest.mock('@/store', () => ({
  useStore: jest.fn(),
}));

jest.mock('@/components/Layout', () => ({
  // prettier-ignore
  Layout: ({ children }: { children: React.ReactNode; }) => <div data-testid="layout">{children}</div>,
}));

jest.mock('@/components/Game', () => ({
  Game: () => <div data-testid="game" />,
}));

jest.mock('@/components/Welcome', () => ({
  Welcome: () => <div data-testid="welcome" />,
}));

describe('App', () => {
  it('should render Welcome component wrapped by Layout if game is not started', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      app: {
        isGameStarted: false,
      },
    }));

    const { container, getAllByTestId } = render(<App />);

    expect(getAllByTestId('layout').length).toBe(1);
    expect(getAllByTestId('welcome').length).toBe(1);

    expect(container).toMatchSnapshot();
  });

  it('should render Game component wrapped by Layout if game has been started', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      app: {
        isGameStarted: true,
      },
    }));

    const { container, getAllByTestId } = render(<App />);

    expect(getAllByTestId('layout').length).toBe(1);
    expect(getAllByTestId('game').length).toBe(1);

    expect(container).toMatchSnapshot();
  });
});
