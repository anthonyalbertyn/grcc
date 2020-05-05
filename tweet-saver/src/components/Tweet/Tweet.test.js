import React from "react";
import { shallow } from "../../enzyme";
import Tweet from "./Tweet";

describe("Tweet Component", () => {
  const TWEET_PROPS = {
    id: "test-id",
    imageURL: "test-url",
    screenName: "test-screen-name",
    name: "test-name",
    date: "test-date",
    text: "test-text",
  };

  it("renders", () => {
    const wrapper = shallow(<Tweet {...TWEET_PROPS} />);
    expect(wrapper.find(".tweet").exists()).toBe(true);
  });

  it("sets the tweet id", () => {
    const wrapper = shallow(<Tweet {...TWEET_PROPS} />);
    expect(wrapper.find(".tweet").prop("id")).toBe(TWEET_PROPS.id);
  });

  it("sets the avatar src", () => {
    const wrapper = shallow(<Tweet {...TWEET_PROPS} />);
    expect(wrapper.find(".tweet-avatar").prop("src")).toBe(
      TWEET_PROPS.imageURL
    );
  });

  it("displays the name", () => {
    const wrapper = shallow(<Tweet {...TWEET_PROPS} />);
    expect(wrapper.find(".tweet-name").text()).toBe(TWEET_PROPS.name);
  });

  it("displays the screen name", () => {
    const wrapper = shallow(<Tweet {...TWEET_PROPS} />);
    expect(wrapper.find(".tweet-screen-name").text()).toBe(
      "@" + TWEET_PROPS.screenName
    );
  });

  it("displays the tweet date", () => {
    const wrapper = shallow(<Tweet {...TWEET_PROPS} />);
    expect(wrapper.find(".tweet-date").text()).toBe(TWEET_PROPS.date);
  });

  it("displays the tweet text", () => {
    const wrapper = shallow(<Tweet {...TWEET_PROPS} />);
    expect(wrapper.find(".tweet-text").text()).toBe(TWEET_PROPS.text);
  });
});
