import { shallow } from "enzyme";
import React from "react";
import Scrollbar from "../../Components/Portfolio/Scrollbar";

describe("Scrollbar test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<Scrollbar {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect Scrollbar component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-Scrollbar is rendered", () => {
        const wrapper = setup();
        const Scrollbar = findJSXByAttr("component-Scrollbar", wrapper);
        expect(Scrollbar.length).toBe(1);
    });
});
