import { shallow } from "enzyme";
import React from "react";
import CategoriesSideBar from "../../Components/Categories/CategoriesSideBar";

describe("CategoriesSideBar test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<CategoriesSideBar {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect CategoriesSideBar component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-CategoriesSideBar is rendered", () => {
        const wrapper = setup();
        const CategoriesSideBar = findJSXByAttr("component-CategoriesSideBar", wrapper);
        expect(CategoriesSideBar.length).toBe(1);
    });
});
