import { shallow } from "enzyme";
import React from "react";
import Portfolio from "../../../components/Portfolio/Portfolio";

describe("Portfolio test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<Portfolio {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect Portfolio component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-Portfolio is rendered", () => {
        const wrapper = setup();
        const Portfolio = findJSXByAttr("component-Portfolio", wrapper);
        expect(Portfolio.length).toBe(1);
    });
});
