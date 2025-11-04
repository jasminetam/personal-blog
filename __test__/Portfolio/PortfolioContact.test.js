import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioContact from '../../Components/Portfolio/PortfolioContact';

describe('PortfolioContact', () => {
  const setup = (props = {}) => render(<PortfolioContact {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-PortfolioContact"', () => {
    setup();
    expect(screen.getByTestId('component-PortfolioContact')).toBeInTheDocument();
  });
});