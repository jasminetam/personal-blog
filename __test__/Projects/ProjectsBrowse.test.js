import React from 'react';
import { render } from '@testing-library/react';
import { findJSXByAttr } from '../setupTests';
import ProjectsBrowse from '../../Components/Projects/ProjectsBrowse';

describe('ProjectsBrowse', () => {
  const setup = (props = {}) => render(<ProjectsBrowse {...props} />);
  it('renders without crashing', () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it('renders root element with data-test="component-ProjectsBrowse"', () => {
    const utils = setup();
    const el = findJSXByAttr('component-ProjectsBrowse', utils);
    expect(el).toBeTruthy();
  });
});
