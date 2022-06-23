import { shallow } from "enzyme";
import React from "react";
import PortfolioNavBar from "../../../components/Portfolio/OtherSkills";

describe("OtherSkills test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<OtherSkills {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect OtherSkills component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-OtherSkills is rendered", () => {
        const wrapper = setup();
        const OtherSkills = findJSXByAttr("component-OtherSkills", wrapper);
        expect(OtherSkills.length).toBe(1);
    });
});
