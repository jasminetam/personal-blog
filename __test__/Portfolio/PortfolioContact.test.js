import { shallow } from "enzyme";
import React from "react";
import PortfolioContact from "../../Components/Portfolio/PortfolioContact";

describe("PortfolioContact test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<PortfolioContact {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect PortfolioContact component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-PortfolioContact is rendered", () => {
        const wrapper = setup();
        const PortfolioContact = findJSXByAttr("component-PortfolioContact", wrapper);
        expect(PortfolioContact.length).toBe(1);
    });
});
