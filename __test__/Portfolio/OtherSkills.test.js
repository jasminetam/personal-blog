import React from 'react';
import { render, screen } from '@testing-library/react';
import OtherSkills from '../../Components/Portfolio/OtherSkills';

describe('OtherSkills', () => {
  const setup = (props = {}) => render(<OtherSkills {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-OtherSkills"', () => {
    setup();
    expect(screen.getByTestId('component-OtherSkills')).toBeInTheDocument();
  });
});
