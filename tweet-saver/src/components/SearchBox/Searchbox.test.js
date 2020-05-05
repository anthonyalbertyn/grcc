import React from "react";
import { shallow } from "../../enzyme";
import SearchBox from "./SearchBox";

describe("SearchBox Component", () => {
  it("renders", () => {
    const wrapper = shallow(<SearchBox />);
    expect(wrapper.find(".search-box").exists()).toBe(true);
  });
});
