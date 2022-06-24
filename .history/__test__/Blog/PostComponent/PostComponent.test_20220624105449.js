import { shallow } from "enzyme";
import React from "react";
import PostComponent from "../../../Components/Blog/PostComponent/PostComponent";

describe("PostComponent test", () => {
    const MockPostComponentItem = {};
    const data
    const setup = (props = {}, state = null) => {
        return shallow(<PostComponent data={}{...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect PostComponent component is rendered without crashing", () => {
        const wrapper = setup(MockPostComponentItem, null);
    });

    // it('renders child correctly', () => {
    //     expect(response.map(obj => obj.label)).toEqual(
    //         expectedResult.map(obj => obj.label)
    //       );
  
    // });

    it("expect component-PostComponent is rendered", () => {
        const wrapper = setup(MockPostComponentItem, null);
        const PostComponent = findJSXByAttr("component-PostComponent", wrapper);
        expect(wrapper.exists()).toBe(true);
    });
});
