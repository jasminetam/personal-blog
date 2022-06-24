import { shallow } from "enzyme";
import React from "react";
import Post from "../../../Components/Blog/Post/Post";

describe("Post test", () => {
    const mockPost = "";

    const setup = (props = {}, state = null) => {
        return shallow(<Post {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect Post component is rendered without crashing", () => {
        const wrapper = setup((mockPost), null);
    });

    it("expect component-Post is rendered", () => {
        const wrapper = setup((mockPost), null);
        const Post = findJSXByAttr("component-Post", wrapper);
        expect(Post.length).toBe(1);
    });
});

