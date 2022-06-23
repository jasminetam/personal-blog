import { shallow } from "enzyme";
import React from "react";
import Port from "../../../components/Portfolio/Port";

describe("Port test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<Port {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect Port component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-Port is rendered", () => {
        const wrapper = setup();
        const Port = findJSXByAttr("component-Port", wrapper);
        expect(Port.length).toBe(1);
    });
});
