import { shallow } from "enzyme";
import React from "react";
import CustomHead from "../../Components/Common/CustomHead";

describe("CustomHead test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<CustomHead {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect CustomHead component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-CustomHead is rendered", () => {
        const wrapper = setup();
        const CustomHead = findJSXByAttr("component-CustomHead", wrapper);
        expect(CustomHead.length).toBe(1);
    });
});
