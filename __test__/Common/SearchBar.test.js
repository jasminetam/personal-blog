import { shallow } from "enzyme";
import React from "react";
import SearchBar from "../../Components/Common/SearchBar";

describe("SearchBar test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<SearchBar {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect SearchBar component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-SearchBar is rendered", () => {
        const wrapper = setup();
        const SearchBar = findJSXByAttr("component-SearchBar", wrapper);
        expect(SearchBar.length).toBe(1);
    });
});
