import { shallow } from "enzyme";
import React from "react";
import DropdownLink from "../../components/Common/DropdownLink";

describe("DropdownLink test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<DropdownLink {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect DropdownLink component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-DropdownLink is rendered", () => {
        const wrapper = setup();
        const DropdownLink = findJSXByAttr("component-DropdownLink", wrapper);
        expect(DropdownLink.length).toBe(1);
    });
});
