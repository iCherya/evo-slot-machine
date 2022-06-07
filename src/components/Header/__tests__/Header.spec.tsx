import { render } from '@testing-library/react';

import { Header } from '@/components/Header';
import { useStore } from '@/store';
import { CONTENT } from '@/config/content';

const mockedUseStore = useStore as jest.Mock;

jest.mock('@/store', () => ({
  useStore: jest.fn(),
}));

describe('Header', () => {
  it('should render header title if game is not started', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      app: {
        isGameStarted: false,
      },
    }));

    const { getByTestId } = render(<Header />);
    const header = getByTestId('header');

    expect(header.textContent).toBe(CONTENT.ui.header.title);

    expect(header).toMatchSnapshot();
  });

  it('should render user balance with currency if game is started', () => {
    mockedUseStore.mockImplementationOnce(() => ({
      app: {
        isGameStarted: true,
      },
    }));

    const { getByTestId } = render(<Header />);
    const header = getByTestId('header');

    expect(header.textContent).toBe('0 €');

    expect(header).toMatchSnapshot();
  });
});
