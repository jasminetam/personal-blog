import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '../../Components/Common/SearchBar';

describe('SearchBar', () => {
  const defaultProps = {};

  const setup = (props = {}) => render(<SearchBar {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-SearchBar"', () => {
    setup();
    expect(screen.getByTestId('component-SearchBar')).toBeInTheDocument();
  });
});
