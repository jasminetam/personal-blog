import React from 'react';
import { render, screen } from '@testing-library/react';
import PostContent from '../../Components/Blog/PostContent';

describe('PostContent', () => {
  const defaultProps = {};

  const setup = (props = {}) => render(<PostContent {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-PostContent"', () => {
    setup();
    expect(screen.getByTestId('component-PostContent')).toBeInTheDocument();
  });
});
