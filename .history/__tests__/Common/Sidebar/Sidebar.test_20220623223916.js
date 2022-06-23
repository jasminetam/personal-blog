import { shallow } from "enzyme";
import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";

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

    it("expect component-contact is rendered", () => {
        const wrapper = setup();
        const contact = findJSXByAttr("component-contact", wrapper);
        expect(contact.length).toBe(1);
    });
});
