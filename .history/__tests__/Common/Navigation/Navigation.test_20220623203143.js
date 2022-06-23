import { shallow } from "enzyme"
import React from "react"
import { isTypedArray } from "util/types"
import Navigation from "../../../Components/Common/Navigation/Navigation"

describe("navigation test", () => {
  it("expect Navigation component is rendered without crashing", () => {
    const wrapper = shallow(<Navigation />);
  });
  it
})