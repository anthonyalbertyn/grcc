import React from "react";
import { shallow, mount } from "../../enzyme";
import SavedTweets from "./SavedTweets";

describe("SavedTweets Component", () => {
  const TWEETS = [
    {
      id: 123,
      imageURL: "test-url",
      name: "test-name",
      screenName: "test-screen-name",
      date: "test-date",
      text: "test-text",
    },
  ];

  it("renders", () => {
    const wrapper = shallow(<SavedTweets />);
    expect(wrapper.find(".saved-tweets").exists()).toBe(true);
  });

  it("displays saved tweets", () => {
    const wrapper = mount(<SavedTweets tweets={TWEETS} />);
    expect(wrapper.find(".tweet").exists()).toBe(true);
    expect(wrapper.find(".tweet").prop("id")).toBe(
      TWEETS[0].id.toString() + "-saved"
    );
    expect(wrapper.find(".tweet-text").text()).toBe(TWEETS[0].text);
  });
});
