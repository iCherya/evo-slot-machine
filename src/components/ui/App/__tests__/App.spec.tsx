import { render } from '@testing-library/react';

import { App } from '@/components/ui/App';
import { useStore } from '@/store';

const mockedUseStore = useStore as jest.Mock;

jest.mock('@/store', () => ({
  useStore: jest.fn(() => ({
    game: {
      isStarted: false,
    },
  })),
}));

jest.mock('@/components/ui/Layout', () => ({
  // prettier-ignore
  Layout: ({ children }: { children: React.ReactNode; }) => <div data-testid="layout">{children}</div>,
}));

jest.mock('@/components/ui/Game', () => ({
  Game: () => <div data-testid="game" />,
}));

jest.mock('@/components/ui/Welcome', () => ({
  Welcome: () => <div data-testid="welcome" />,
}));

jest.mock('@/context/Language', () => ({
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  LanguageProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="languageProvider">{children}</div>
  ),
}));

describe('App', () => {
  it('should be wrapped by LanguageProvider', () => {
    const { container, getByTestId } = render(<App />);
    const languageProvider = getByTestId('languageProvider');

    expect(languageProvider).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render Welcome component wrapped by Layout if game is not started', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      game: {
        isStarted: false,
      },
    }));

    const { container, getAllByTestId } = render(<App />);

    expect(getAllByTestId('layout').length).toBe(1);
    expect(getAllByTestId('welcome').length).toBe(1);

    expect(container).toMatchSnapshot();
  });

  it('should render Game component wrapped by Layout if game has been started', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      game: {
        isStarted: true,
      },
    }));

    const { container, getAllByTestId } = render(<App />);

    expect(getAllByTestId('layout').length).toBe(1);
    expect(getAllByTestId('game').length).toBe(1);

    expect(container).toMatchSnapshot();
  });
});
