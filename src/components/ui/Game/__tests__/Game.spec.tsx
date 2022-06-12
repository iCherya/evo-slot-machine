import { render } from '@testing-library/react';

import { Game } from '@/components/ui/Game';

jest.mock('@/components/logic/SlotMachine', () => ({
  SlotMachine: () => <div data-testid="slot-machine" />,
}));

jest.mock('@/components/logic/GameControls', () => ({
  GameControls: () => <div data-testid="game-controls" />,
}));

describe('Game', () => {
  it('should render SlotMachine and GameControls components', () => {
    const { container, getAllByTestId } = render(<Game />);

    expect(getAllByTestId('slot-machine').length).toBe(1);
    expect(getAllByTestId('game-controls').length).toBe(1);

    expect(container).toMatchSnapshot();
  });
});
