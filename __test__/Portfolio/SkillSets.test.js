import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillSets from '../../Components/Portfolio/SkillSets';

describe('SkillSets', () => {
  const setup = (props = {}) => render(<SkillSets {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-SkillSets"', () => {
    setup();
    expect(screen.getByTestId('component-SkillSets')).toBeInTheDocument();
  });
});
