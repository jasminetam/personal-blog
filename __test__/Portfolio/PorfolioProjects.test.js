import { shallow } from "enzyme";
import React from "react";
import PortfolioProjects from "../../components/Portfolio/PortfolioProjects";

describe("PortfolioProjects test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<PortfolioProjects {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect PortfolioProjects component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-PortfolioProjects is rendered", () => {
        const wrapper = setup();
        const PortfolioProjects = findJSXByAttr("component-PortfolioProjects", wrapper);
        expect(PortfolioProjects.length).toBe(1);
    });
});
