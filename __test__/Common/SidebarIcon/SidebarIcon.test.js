import { shallow } from "enzyme";
import React from "react";
import SidebarIcon from "../../../Components/Common/SidebarIcon/SidebarIcon";

describe("SidebarIcon test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<SidebarIcon {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect SidebarIcon component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-sidebarIcon is rendered", () => {
        const wrapper = setup();
        const sidebarIcon = findJSXByAttr("component-sidebarIcon", wrapper);
        expect(sidebarIcon.length).toBe(1);
    });
});
