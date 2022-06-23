import { shallow } from "enzyme";
import React from "react";
import ProjectBrowse from "../../../components/ProjectBrowse/ProjectBrowse";

describe("ProjectBro test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<ProjectBro {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect ProjectBro component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-project is rendered", () => {
        const wrapper = setup();
        const ProjectBro = findJSXByAttr("component-project", wrapper);
        expect(ProjectBro.length).toBe(1);
    });
});
