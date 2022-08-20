import { shallow } from "enzyme";
import React from "react";
import ProjectLayout from "../../components/Projects/ProjectLayout";

describe("ProjectLayout test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<ProjectLayout {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect ProjectLayout component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-ProjectLayout is rendered", () => {
        const wrapper = setup();
        const ProjectLayout = findJSXByAttr("component-ProjectLayout", wrapper);
        expect(ProjectLayout.length).toBe(1);
    });
});

