import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
configure({ testIdAttribute: 'data-test' });
import 'intersection-observer';
jest.mock('next/router', () => require('next-router-mock'));

export const findJSXByAttr = (name, utilsOrElement) => {
  if (!utilsOrElement) {
 throw new Error('findJSXByAttr: expected a render utils object or container/element');
  }

  if (typeof utilsOrElement.getByTestId === 'function') {
    return utilsOrElement.getByTestId(name);
  }

  return within(utilsOrElement).getByTestId(name);
};
