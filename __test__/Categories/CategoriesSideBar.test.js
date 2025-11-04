import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoriesSideBar from '../../Components/Categories/CategoriesSideBar';

describe('CategoriesSideBar', () => {
  const defaultProps = {};

  const setup = (props = {}) =>
    render(<CategoriesSideBar {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-CategoriesSideBar"', () => {
    setup();
    expect(
      screen.getByTestId('component-CategoriesSideBar')
    ).toBeInTheDocument();
  });
});
