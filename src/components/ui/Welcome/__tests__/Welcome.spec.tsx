import { render, fireEvent } from '@testing-library/react';

import { Welcome } from '@/components/ui/Welcome';

const mockedStartGame = jest.fn();

jest.mock('@/store', () => ({
  useStore: jest.fn(() => ({
    game: {
      startGame: mockedStartGame,
    },
  })),
}));

jest.mock('@/components/ui/Button', () => ({
  Button: jest.fn(({ children, action, ...props }) => (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <button onClick={action} {...props}>
      {children}
    </button>
  )),
}));

jest.mock('@/components/logic/Translations', () => ({
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  TranslateText: ({ translationKey }: { translationKey: string }) => <span>{translationKey}</span>,
}));

describe('Welcome', () => {
  it('should render main welcome banner', () => {
    const { getByAltText } = render(<Welcome />);
    const welcomeBanner = getByAltText('Lucky Spin Banner');

    expect(welcomeBanner).toBeInTheDocument();
    expect(welcomeBanner).toMatchSnapshot();
  });

  it('should render starting game button', () => {
    const { getByText } = render(<Welcome />);
    const startGameButton = getByText('ui.welcome.play.button.text');

    expect(startGameButton).toBeInTheDocument();
    expect(startGameButton).toMatchSnapshot();
  });

  it('should start the game when button clicked', () => {
    const { container, getByRole } = render(<Welcome />);
    const startGameComponent = getByRole('button');

    fireEvent(startGameComponent, new MouseEvent('click', { bubbles: true }));

    expect(mockedStartGame).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});
