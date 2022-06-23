import { shallow } from "enzyme";
import React from "react";
import PostContact from "../../../components/Blog/PostContact";

describe("PostContact test", () => {
    const mockPostContactData = {};

    const setup = (props = {}, state = null) => {
        return shallow(<PostContact {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect PostContact component is rendered without crashing", () => {
        const wrapper = setup(mockPostContactData, null);
    });

    it("expect component-blog-PostContact is rendered", () => {
        const wrapper = setup(mockPostContactData, null);
        const PostContact = findJSXByAttr("component-blog-PostContact", wrapper);
        expect(PostContact.length).toBe(1);
    });
});
