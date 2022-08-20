import { shallow } from 'enzyme';
import React from 'react';
import Navigation from '../../Components/Common/Navigation';

describe('navigation test', () => {
  it('expect Navigation component is rendered without crashing', () => {
    const wrapper = shallow(<Navigation />);
  });
  it('expect Navigation component is rendered', () => {
    const wrapper = shallow(<Navigation />);
  });
});
