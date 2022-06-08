import { render } from '@testing-library/react';

import { Header } from '@/components/ui/Header';
import { useStore } from '@/store';
import { CONTENT } from '@/config/content';

const mockedUseStore = useStore as jest.Mock;

jest.mock('@/store', () => ({
  useStore: jest.fn(),
}));

jest.mock('@/components/logic/AnimatedNumber', () => ({
  AnimatedNumber: jest.fn(({ number }) => <div data-testid="animated-number">{number}</div>),
}));

describe('Header', () => {
  it('should render header title if game is not started', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      game: {
        isStarted: false,
      },
    }));

    const { getByTestId } = render(<Header />);
    const header = getByTestId('header');

    expect(header.textContent).toBe(CONTENT.ui.header.title);

    expect(header).toMatchSnapshot();
  });

  it('should render user balance with currency if game is started', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      game: {
        isStarted: true,
      },
      user: {
        balance: 42,
      },
    }));

    const { getByTestId } = render(<Header />);
    const header = getByTestId('header');
    const animatedNumber = getByTestId('animated-number');

    expect(animatedNumber.textContent).toBe('42');

    expect(header).toMatchSnapshot();
  });
});
