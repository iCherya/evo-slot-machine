import { render } from '@testing-library/react';

import { Footer } from '@/components/Footer';
import { CONTENT } from '@/config/content';

jest.mock('@/components/shared/Button', () => ({
  Button: () => <div data-testid="button" />,
}));

describe('Footer', () => {
  it('should render credentials section', () => {
    const { getByTestId } = render(<Footer />);

    const credentials = getByTestId('credentials');

    expect(credentials.firstChild?.nodeName).toBe('IMG');
    expect(credentials.lastChild?.textContent).toBe(CONTENT.ui.footer.description);

    expect(credentials).toMatchSnapshot();
  });

  it('should render settings button', () => {
    const { getAllByTestId } = render(<Footer />);

    const settingsButton = getAllByTestId('settings-button');
    expect(settingsButton.length).toBe(1);

    expect(settingsButton).toMatchSnapshot();
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
