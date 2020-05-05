import React from "react";
import { shallow, mount } from "./enzyme";
import App from "./App";

describe("App", () => {
  it("renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".app").exists()).toBe(true);
  });
  it("dispplays a dashboard component", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(".dashboard").exists()).toBe(true);
  });
});
