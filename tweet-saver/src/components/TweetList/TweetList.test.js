import React from "react";
import { shallow, mount } from "../../enzyme";
import TweetList from "./TweetList";

describe("TweetList Component", () => {
  const TWEET_DATA = {
    tweets: [
      {
        id: 123,
        user: {
          profileImageURLHttps: "test-url",
          name: "test-name",
          screenName: "test-screen-name",
        },
        createdAt: "",
        text: "test-text",
      },
    ],
  };

  it("renders", () => {
    const wrapper = shallow(<TweetList />);
    expect(wrapper.find(".tweet-list").exists()).toBe(true);
  });

  it("displays a message when no tweets", () => {
    const wrapper = shallow(
      <TweetList tweetData={{}} message="test-message" />
    );
    const message = wrapper.find(".tweet-results-message");
    expect(message.exists()).toBe(true);
    expect(message.text()).toBe("test-message");
  });

  it("displays tweets", () => {
    const wrapper = mount(<TweetList tweetData={TWEET_DATA} />);
    expect(wrapper.find(".tweet").exists()).toBe(true);
    expect(wrapper.find(".tweet").prop("id")).toBe(
      TWEET_DATA.tweets[0].id.toString()
    );
    expect(wrapper.find(".tweet-text").text()).toBe(TWEET_DATA.tweets[0].text);
  });
});
