import { render, screen } from '@testing-library/react';
import React from 'react';
import Navigation from '../../Components/Common/Navigation';

describe('navigation test', () => {
  it('expect Navigation component is rendered without crashing', () => {
    const wrapper = render(<Navigation />);
  });
  it('expect Navigation component is rendered', () => {
    const wrapper = render(<Navigation />);
  });
});
