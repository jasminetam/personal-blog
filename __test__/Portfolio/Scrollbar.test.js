import React from 'react';
import { render, screen } from '@testing-library/react';
import Scrollbar from '../../Components/Portfolio/Scrollbar';

describe('Scrollbar', () => {
  const setup = (props = {}) => render(<Scrollbar {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-Scrollbar"', () => {
    setup();
    expect(screen.getByTestId('component-Scrollbar')).toBeInTheDocument();
  });
});
