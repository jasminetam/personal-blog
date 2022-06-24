import { shallow } from "enzyme";
import React from "react";
import PortfolioNavBar from "../../Components/Portfolio/PortfolioNavBar";

describe("PortfolioNavBar test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<PortfolioNavBar {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect PortfolioNavBar component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-PortfolioNavBar is rendered", () => {
        const wrapper = setup();
        const PortfolioNavBar = findJSXByAttr("component-PortfolioNavBar", wrapper);
        expect(PortfolioNavBar.length).toBe(1);
    });
});
