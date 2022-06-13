import { render } from '@testing-library/react';

import { Layout } from '@/components/ui/Layout';

jest.mock('@/components/ui/Header', () => ({
  Header: () => <div data-testid="header" />,
}));

jest.mock('@/components/ui/Footer', () => ({
  Footer: () => <div data-testid="footer" />,
}));

jest.mock('@/components/ui/Settings', () => ({
  Settings: () => <div data-testid="settings" />,
}));

describe('Layout', () => {
  const Child = () => <div data-testid="child">Child component</div>;

  it('should render Header, Footer and Settings components', () => {
    const { container, getAllByTestId } = render(
      <Layout>
        <Child />
      </Layout>,
    );

    expect(getAllByTestId('header').length).toBe(1);
    expect(getAllByTestId('footer').length).toBe(1);
    expect(getAllByTestId('settings').length).toBe(1);

    expect(container).toMatchSnapshot();
  });

  it('should render children components', () => {
    const { container, getAllByTestId } = render(
      <Layout>
        <Child />
        <Child />
        <Child />
      </Layout>,
    );

    expect(getAllByTestId('child').length).toBe(3);

    expect(container).toMatchSnapshot();
  });
});
