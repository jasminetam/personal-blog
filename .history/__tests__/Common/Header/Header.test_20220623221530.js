import { shallow } from "enzyme"
import React from "react"
import Header from "../../../Components/Common/Header/Header"

describe("Header test", () => {
  it("expect Header component is rendered without crashing", () => {
    const wrapper = shallow(<Header />);
  });
  it("expect Header component is rendered", () => {
    const wrapper = shallow(<Header />);
  });

})