import { shallow } from "enzyme";
import React from "react";
import PostContent from "../../Components/Blog/PostContent";

describe("PostContent test", () => {
    const mockPostContentData = {};

    const setup = (props = {}, state = null) => {
        return shallow(<PostContent {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect PostContent component is rendered without crashing", () => {
        const wrapper = setup(mockPostContentData, null);
    });

    it("expect component-PostContent is rendered", () => {
        const wrapper = setup(mockPostContentData, null);
        const PostContent = findJSXByAttr("component-PostContent", wrapper);
        expect(PostContent.length).toBe(1);
    });
});
