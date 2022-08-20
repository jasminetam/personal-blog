import { shallow } from "enzyme"
import React from "react"
import Header from "../../Components/Common/Header"

describe("Header test", () => {
  it("expect header component is rendered without crashing", () => {
    const wrapper = shallow(<Header />);
  });
  it("expect header component is rendered", () => {
    const wrapper = shallow(<Header />);
  });

})