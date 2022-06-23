import { shallow } from "enzyme";
import React from "react";
import SkillSets from "../../../components/Portfolio/SkillSets";

describe("SkillSets test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<SkillSets {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect SkillSets component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-SkillSets is rendered", () => {
        const wrapper = setup();
        const SkillSets = findJSXByAttr("component-SkillSets", wrapper);
        expect(SkillSets.length).toBe(1);
    });
});
