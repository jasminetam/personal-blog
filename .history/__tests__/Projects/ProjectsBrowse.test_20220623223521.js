import { shallow } from "enzyme";
import React from "react";
import ProjectBrowse from "../../../components/ProjectBrowse/ProjectBrowse";

describe("ProjectBrowse test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<ProjectBrowse {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect ProjectBrowse component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-project is rendered", () => {
        const wrapper = setup();
        const ProjectBrowse = findJSXByAttr("component-project", wrapper);
        expect(ProjectBrowse.length).toBe(1);
    });
});
