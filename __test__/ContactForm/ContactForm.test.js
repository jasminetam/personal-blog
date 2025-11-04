import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from '../../Components/ContactForm/ContactForm';

describe('ContactForm', () => {
  const defaultProps = {};

  const setup = (props = {}) => render(<ContactForm {...defaultProps} {...props} />);

  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-ContactForm"', () => {
    setup();
    expect(screen.getByTestId('component-ContactForm')).toBeInTheDocument();
  });
});
