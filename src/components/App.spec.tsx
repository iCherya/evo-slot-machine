// Keep until some real tests will be added
import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('should work', () => {
    const component = render(<App />);

    expect(component.queryByText('App')).toBeTruthy();
  });
});
