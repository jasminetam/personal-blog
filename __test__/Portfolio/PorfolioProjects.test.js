import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioProjects from '../../Components/Portfolio/PortfolioProjects';

describe('PortfolioProjects', () => {
  const defaultProps = {};

  const setup = (props = {}) =>
    render(<PortfolioProjects {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-PortfolioProjects"', () => {
    setup();
    expect(screen.getByTestId('component-PortfolioProjects')).toBeInTheDocument();
  });
});

