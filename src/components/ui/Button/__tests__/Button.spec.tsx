import { render } from '@testing-library/react';

import { Button } from '@/components/ui/Button';

jest.mock('react-awesome-button', () => ({
  ...jest.requireActual,
  AwesomeButton: () => <div data-testid="default_button" />,
  AwesomeButtonSocial: () => <div data-testid="social_button" />,
}));

describe('Button', () => {
  it('should render AwesomeButtonSocial button if passed option is social', () => {
    const { getByTestId, container } = render(<Button option="social">Social button</Button>);

    expect(getByTestId('social_button')).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('should render AwesomeButton button by default', () => {
    const { getByTestId, container } = render(<Button>Default button</Button>);

    expect(getByTestId('default_button')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
