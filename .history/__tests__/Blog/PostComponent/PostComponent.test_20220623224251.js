import { shallow } from "enzyme";
import React from "react";
import PostComponent from "../../components/Blog/PostComponent";

describe("PostComponent test", () => {
    const MockPostComponentItem = {};

    const setup = (props = {}, state = null) => {
        return shallow(<PostComponent {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect PostComponent component is rendered without crashing", () => {
        const wrapper = setup(MockPostComponentItem, null);
    });

    it("expect component-blog-PostComponent is rendered", () => {
        const wrapper = setup(MockPostComponentItem, null);
        const PostComponent = findJSXByAttr("component-blog-PostComponent", wrapper);
        expect(PostComponent.length).toBe(1);
    });
});
