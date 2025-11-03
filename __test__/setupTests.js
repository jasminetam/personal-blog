import '@testing-library/jest-dom';

import { configure, within } from '@testing-library/react';
configure({ testIdAttribute: 'data-test' });

export const findJSXByAttr = (utilsOrElement, name) => {
  if (!utilsOrElement) {
    throw new Error('findJSXByAttr: expected a render utils object or container/element');
  }

  if (typeof utilsOrElement.getByTestId === 'function') {
    return utilsOrElement.getByTestId(name);
  }

  return within(utilsOrElement).getByTestId(name);
};
