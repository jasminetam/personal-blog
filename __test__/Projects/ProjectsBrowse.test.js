import { shallow } from "enzyme";
import React from "react";
import ProjectsBrowse from "../../components/Projects/ProjectsBrowse";

describe("ProjectsBrowse test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<ProjectsBrowse {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect ProjectBrowse component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-project is rendered", () => {
        const wrapper = setup();
        const ProjectsBrowse = findJSXByAttr("component-ProjectsBrowse", wrapper);
        expect(ProjectsBrowse.length).toBe(1);
    });
});
