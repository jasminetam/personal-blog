import { shallow } from 'enzyme';
import React from 'react';
import Sidebar from '../../Components/Common/Sidebar';

describe('Sidebar test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Sidebar {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Sidebar component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect component-Sidebar is rendered', () => {
    const wrapper = setup();
    const Sidebar = findJSXByAttr('component-Sidebar', wrapper);
    expect(Sidebar.length).toBe(1);
  });
});
