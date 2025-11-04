import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectLayout from '../../Components/Projects/ProjectLayout';

describe('ProjectLayout', () => {
  const defaultProps = {};

  const setup = (props = {}) =>
    render(<ProjectLayout {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-ProjectLayout"', () => {
    setup();
    expect(screen.getByTestId('component-ProjectLayout')).toBeInTheDocument();
  });
});
