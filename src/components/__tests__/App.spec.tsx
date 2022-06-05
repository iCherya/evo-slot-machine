import { render } from '@testing-library/react';

import { App } from '../App';
import { useStore } from '@/store';

const mockedUseStore = useStore as jest.Mock;

jest.mock('@/store', () => ({
  useStore: jest.fn(),
}));

jest.mock('@/components/Game/Game', () => ({
  Game: () => <div data-testid="game" />,
}));

jest.mock('@/components/Main/Main', () => ({
  Main: () => <div data-testid="main" />,
}));

describe('App', () => {
  it('should render Main component if game is not started', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      app: {
        isGameStarted: false,
      },
    }));

    const { container, getAllByTestId } = render(<App />);

    expect(getAllByTestId('main').length).toBe(1);

    expect(container).toMatchSnapshot();
  });

  it('should render Game component if game has been started', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      app: {
        isGameStarted: true,
      },
    }));
    const { container, getAllByTestId } = render(<App />);

    expect(getAllByTestId('game').length).toBe(1);

    expect(container).toMatchSnapshot();
  });
});
