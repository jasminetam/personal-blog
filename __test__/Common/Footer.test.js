import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../Components/Common/Footer';

describe('Footer', () => {
  const setup = (props = {}) => render(<Footer {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-footer"', () => {
    setup();
    expect(screen.getByTestId('component-footer')).toBeInTheDocument();
  });
});
