import React from 'react';
import { render, screen } from '@testing-library/react';
import SidebarIcon from '../../Components/Common/SidebarIcon';

describe('SidebarIcon', () => {
  const defaultProps = {};

  const setup = (props = {}) => render(<SidebarIcon {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-sidebarIcon"', () => {
    setup();
    expect(screen.getByTestId('component-sidebarIcon')).toBeInTheDocument();
  });
});
