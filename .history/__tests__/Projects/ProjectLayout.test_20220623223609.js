import { shallow } from "enzyme";
import React from "react";
import Project from "../../components/Project/Project";

describe("Project test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<Project {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect Project component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-Project is rendered", () => {
        const wrapper = setup();
        const Project = findJSXByAttr("component-Project", wrapper);
        expect(Project.length).toBe(1);
    });
});

