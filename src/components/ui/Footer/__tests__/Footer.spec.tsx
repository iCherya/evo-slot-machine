import { render, fireEvent } from '@testing-library/react';

import { Footer } from '@/components/ui/Footer';
import { useStore } from '@/store';

const mockedUseStore = useStore as jest.Mock;
const toggleSettings = jest.fn();
const stopGame = jest.fn();

jest.mock('@/store', () => ({
  useStore: jest.fn(),
}));

mockedUseStore.mockImplementation(() => ({
  game: {
    toggleSettings,
    stopGame,
  },
}));

jest.mock('@/components/ui/Button', () => ({
  Button: () => <button data-testid="button" />,
}));

jest.mock('@/components/logic/Translations', () => ({
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  TranslateText: ({ translationKey }: { translationKey: string }) => <span>{translationKey}</span>,
}));

describe('Footer', () => {
  it('should render credentials section', () => {
    const { getByTestId } = render(<Footer />);

    const credentials = getByTestId('credentials');

    expect(credentials.firstChild?.nodeName).toBe('IMG');
    expect(credentials.lastChild?.textContent).toBe('ui.footer.description');

    expect(credentials).toMatchSnapshot();
  });

  it('should handle logo click', () => {
    const { getByTestId } = render(<Footer />);

    const logo = getByTestId('logo');
    fireEvent(logo, new MouseEvent('click', { bubbles: true }));

    expect(stopGame).toHaveBeenCalled();
  });

  it('should render settings button', () => {
    const { getAllByTestId } = render(<Footer />);

    const settingsButton = getAllByTestId('settings-button');
    expect(settingsButton.length).toBe(1);

    expect(settingsButton).toMatchSnapshot();
  });

  it('should handle settings button click', () => {
    const { getByTestId } = render(<Footer />);

    const settingsButton = getByTestId('settings-button');
    fireEvent(settingsButton, new MouseEvent('click', { bubbles: true }));

    expect(toggleSettings).toHaveBeenCalled();
  });

  it('should render social buttons', () => {
    const { getByTestId, getAllByTestId } = render(<Footer />);

    const socialButtons = getByTestId('social-buttons');
    expect(socialButtons.children.length).toBe(2);

    const socialButtonComponents = getAllByTestId('button');
    expect(socialButtonComponents.length).toBe(2);

    socialButtonComponents.forEach((socialButtonComponent, index) => {
      expect(socialButtonComponent.parentElement).toBe(socialButtons.children[index]);
    });

    expect(socialButtons).toMatchSnapshot();
  });
});
