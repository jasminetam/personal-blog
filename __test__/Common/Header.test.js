import { render } from '@testing-library/react';
import React from "react"
import Header from "../../Components/Common/Header"

describe("Header test", () => {
  it("expect header component is rendered without crashing", () => {
    const wrapper = render(<Header />);
  });
  it("expect header component is rendered", () => {
    const wrapper = render(<Header />);
  });

})