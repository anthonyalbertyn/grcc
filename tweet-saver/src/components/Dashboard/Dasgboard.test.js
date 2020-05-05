import React from "react";
import { shallow, mount } from "../../enzyme";
import Dashboard from "./Dashboard";

describe("Dashboard Component", () => {
  it("renders", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(".dashboard").exists()).toBe(true);
  });

  it("displays a heading", () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper.find(".heading").exists()).toBe(true);
  });

  it("displays a search box", () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper.find(".search-box").exists()).toBe(true);
  });

  it("displays a tweet list", () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper.find(".tweet-list").exists()).toBe(true);
  });

  it("displays saved tweets", () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper.find(".saved-tweets").exists()).toBe(true);
  });
});
