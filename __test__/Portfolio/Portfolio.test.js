import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from '../../Components/Portfolio/Portfolio';

describe('Portfolio', () => {
  const defaultProps = {};

  const setup = (props = {}) => render(<Portfolio {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-Portfolio"', () => {
    setup();
    expect(screen.getByTestId('component-Portfolio')).toBeInTheDocument();
  });
});
