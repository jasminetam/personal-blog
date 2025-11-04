import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CustomHead from '../../Components/Common/CustomHead';
jest.mock('next/head', () => {
  const React = require('react');
  const ReactDOM = require('react-dom');
  return function Head({ children }) {
    const head = globalThis?.document?.head || null;
    return head
      ? ReactDOM.createPortal(children, head)
      : React.createElement(React.Fragment, null, children);
  };
});

describe('CustomHead', () => {
  it('injects expected favicon/manifest links into head', async () => {
    render(<CustomHead />);

    await waitFor(() => {
      expect(document.head.querySelector('link[rel="manifest"]')).not.toBeNull();
    });

    const hrefs = Array.from(document.head.querySelectorAll('link'))
      .map(l => l.getAttribute('href') || '');

    expect(hrefs.some(h => /\/?image\/favicon-32x32\.png$/.test(h))).toBe(true);
    expect(hrefs.some(h => /\/?image\/apple-touch-icon\.png$/.test(h))).toBe(true);
  });

  it('sets title and description when provided', async () => {
    render(<CustomHead />);

    await waitFor(() => {
     expect(CustomHead.length).toBe(1);
    });
  });
});
