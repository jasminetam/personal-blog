import { shallow } from "enzyme";
import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";

describe("ContactForm test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<ContactForm {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect ContactForm component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-contact is rendered", () => {
        const wrapper = setup();
        const ContactForm = findJSXByAttr("component-ContactForm", wrapper);
        expect(ContactForm.length).toBe(1);
    });
});
