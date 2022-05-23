import React from 'react';
import { render } from '@testing-library/react';
import { App, sum } from './App';

describe('test for test', () => {
  describe('App', () => {
    it('should work', () => {
      const component = render(<App />);

      expect(component.queryByText('Hello Vite + React!')).toBeFalsy();
      expect(component.queryByText('Perform project setup')).toBeTruthy();
    });
  });

  describe('sum', () => {
    it('should add two numbers', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});
