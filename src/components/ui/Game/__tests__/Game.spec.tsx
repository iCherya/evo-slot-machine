import { render } from '@testing-library/react';

import { Game } from '@/components/ui/Game';
import { useStore } from '@/store';

const mockedUseStore = useStore as jest.Mock;

jest.mock('@/store', () => ({
  useStore: jest.fn(),
}));

jest.mock('@/components/logic/SlotMachine', () => ({
  SlotMachine: () => <div data-testid="slot-machine" />,
}));

jest.mock('@/components/logic/GameControls', () => ({
  GameControls: () => <div data-testid="game-controls" />,
}));

describe('Game', () => {
  it('should render SlotMachine and GameControls components', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      game: {
        showWinAnimation: false,
        winCount: 0,
      },
    }));

    const { container, getAllByTestId } = render(<Game />);

    expect(getAllByTestId('slot-machine').length).toBe(1);
    expect(getAllByTestId('game-controls').length).toBe(1);

    expect(container).toMatchSnapshot();
  });

  it('should render banner with win count if showWinAnimation set to true', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      game: {
        showWinAnimation: true,
        winCount: 42,
      },
    }));

    const { getByTestId } = render(<Game />);
    const banner = getByTestId('banner');

    expect(banner.textContent).toBe('+42');

    expect(banner).toMatchSnapshot();
  });
});
