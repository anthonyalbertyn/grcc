import React from "react";
import { shallow, mount } from "../../enzyme";
import Heading from "./Heading";

describe("Heading Component", () => {
  const PROPS = { level: 1, text: "test-text" };

  it("renders", () => {
    const wrapper = shallow(<Heading {...PROPS} />);
    expect(wrapper.find(".heading").exists()).toBe(true);
  });

  it("displays h1 tag and text", () => {
    const wrapper = mount(<Heading {...PROPS} />);
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find("h1").text()).toBe("test-text");
  });
});
