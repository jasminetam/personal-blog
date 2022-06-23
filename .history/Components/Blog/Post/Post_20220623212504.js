import { shallow } from "enzyme";
import React from "react";
import Post from "../../../Components/Blog/Post/Post";

describe("Post test", () => {
    const mockPostData = {};

    const setup = (props = {}, state = null) => {
        return shallow(<Post {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect BlogPost component is rendered without crashing", () => {
        const wrapper = setup(mockPostData, null);
    });

    it("expect component-blog-blogPost is rendered", () => {
        const wrapper = setup(mockPostData, null);
        const blogPost = findJSXByAttr("component-blog-Post", wrapper);
        expect(Post.length).toBe(1);
    });
});
