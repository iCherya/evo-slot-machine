import { render } from '@testing-library/react';

import { Game } from '@/components/ui/Game';

jest.mock('@/components/logic/MachineReels', () => ({
  MachineReels: () => <div data-testid="machine-reels" />,
}));

jest.mock('@/components/logic/GameControls', () => ({
  GameControls: () => <div data-testid="game-controls" />,
}));

describe('Game', () => {
  it('should render MachineReels and GameControls components', () => {
    const { container, getAllByTestId } = render(<Game />);

    expect(getAllByTestId('machine-reels').length).toBe(1);
    expect(getAllByTestId('game-controls').length).toBe(1);

    expect(container).toMatchSnapshot();
  });
});
