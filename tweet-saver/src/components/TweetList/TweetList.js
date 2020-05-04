import React from "react";
import Tweet from "../Tweet";

const TweetList = ({ tweetData = {}, message = "" }) => {
  return (
    <div className="tweet-list">
      {tweetData.tweets &&
        tweetData.tweets.length > 0 &&
        tweetData.tweets.map((item) => (
          <Tweet
            key={item.id}
            imageURL={item.user.profileImageURLHttps}
            name={item.user.name}
            screenName={item.user.screenName}
            date={new Date(item.createdAt).toLocaleString()}
            text={item.text}
          />
        ))}
      {(!tweetData.tweets || !tweetData.tweets.length > 0) && message && (
        <div className="tweet-results-message">{message}</div>
      )}
    </div>
  );
};

export default TweetList;
