import { shallow } from "enzyme";
import React from "react";
import Post from "../../../components/Blog/Post/";

describe("Post test", () => {
    const mockPost = "";
    const mockData = {};

    const setup = (props = {}, state = null) => {
        return shallow(<Post {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect Post component is rendered without crashing", () => {
        const wrapper = setup((mockPost, mockData), null);
    });

    it("expect component-blog-Post is rendered", () => {
        const wrapper = setup((mockPost, mockData), null);
        const Post = findJSXByAttr("component-blog-Post", wrapper);
        expect(Post.length).toBe(1);
    });
});

