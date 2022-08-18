import { shallow } from "enzyme";
import React from "react";
import Sidebar from "../../Components/Common/Sidebar";

describe("Sidebar test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<Sidebar {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect Sidebar component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-sidebar is rendered", () => {
        const wrapper = setup();
        const sidebar = findJSXByAttr("component-sidebar", wrapper);
        expect(sidebar.length).toBe(1);
    });
});
