import { shallow } from "enzyme";
import React from "react";
import ProjectBrowse from "../../../components/ProjectBrowse/ProjectBrowse";

describe("ProjectBr test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<ProjectBr {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect ProjectBr component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-project is rendered", () => {
        const wrapper = setup();
        const ProjectBr = findJSXByAttr("component-project", wrapper);
        expect(ProjectBr.length).toBe(1);
    });
});
