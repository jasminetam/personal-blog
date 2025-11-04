import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from '../../Components/Blog/Post';

describe('Post', () => {
  const defaultProps = {};

  const setup = (props = {}) => render(<Post {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-Post"', () => {
    setup();
    expect(screen.getByTestId('component-Post')).toBeInTheDocument();
  });
});
