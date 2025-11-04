import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoriesItem from '../../Components/Categories/CategoriesItem';

describe('CategoriesItem', () => {
  const defaultProps = {};

  const setup = (props = {}) => render(<CategoriesItem {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-CategoriesItem"', () => {
    setup();
    expect(screen.getByTestId('component-CategoriesItem')).toBeInTheDocument();
  });
});
