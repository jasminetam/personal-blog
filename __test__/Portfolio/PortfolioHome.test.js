import { shallow } from "enzyme";
import React from "react";
import PortfolioHome from "../../Components/Portfolio/PortfolioHome";

describe("PortfolioHome test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<PortfolioHome {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect PortfolioHome component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-PortfolioHome is rendered", () => {
        const wrapper = setup();
        const PortfolioHome = findJSXByAttr("component-PortfolioHome", wrapper);
        expect(PortfolioHome.length).toBe(1);
    });
});
