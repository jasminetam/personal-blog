import { shallow } from "enzyme";
import React from "react";
import SocialMedia from "../../Components/Portfolio/SocialMedia";

describe("SocialMedia test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<SocialMedia {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect SocialMedia component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-SocialMedia is rendered", () => {
        const wrapper = setup();
        const SocialMedia = findJSXByAttr("component-SocialMedia", wrapper);
        expect(SocialMedia.length).toBe(1);
    });
});
