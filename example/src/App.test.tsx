import { render } from '@testing-library/react';
import { expect } from 'chai';
import * as React from 'react';
import App from './App';

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/react reactions/i);
    expect(document.body.contains(linkElement));
  });
});
