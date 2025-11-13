import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioHome from '../../Components/Portfolio/PortfolioHome';

describe('PortfolioHome', () => {
  const setup = (props = {}) => render(<PortfolioHome {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-PortfolioHome"', () => {
    setup();
    expect(screen.getByTestId('component-PortfolioHome')).toBeInTheDocument();
  });
});
