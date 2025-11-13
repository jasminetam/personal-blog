import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '../../Components/Common/Sidebar';

describe('Sidebar', () => {
  const setup = (props = {}) => render(<Sidebar {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-Sidebar"', () => {
    setup();
    expect(screen.getByTestId('component-Sidebar')).toBeInTheDocument();
  });
});
