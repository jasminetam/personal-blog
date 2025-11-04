import React from 'react';
import { render, screen } from '@testing-library/react';
import PostComponent from '../../Components/Blog/PostComponent';

describe('PostComponent', () => {
  const defaultData = [];

  const setup = (props = {}) =>
    render(<PostComponent data={defaultData} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-PostComponent"', () => {
    setup();
    expect(screen.getByTestId('component-PostComponent')).toBeInTheDocument();
  });
});
