import React from 'react';
import { render, screen } from '@testing-library/react';
import DropdownLink from '../../Components/Common/DropdownLink';

describe('DropdownLink', () => {
  const defaultProps = { href: '/test', children: 'Test Link' };

  const setup = (props = {}) =>
    render(<DropdownLink {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-DropdownLink"', () => {
    setup();
    expect(screen.getByTestId('component-DropdownLink')).toBeInTheDocument();
  });

  it('renders a link with correct text and href', () => {
    setup({ href: '/about', children: 'About' });
    const link = screen.getByRole('link', { name: /about/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
  });
});
