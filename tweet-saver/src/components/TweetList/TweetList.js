import React from "react";
import Tweet from "../Tweet";

const TweetList = ({ tweetData = {}, message = "", onDragStartCallback }) => {
  return (
    <div className="tweet-list">
      {tweetData.tweets &&
        tweetData.tweets.length > 0 &&
        tweetData.tweets.map((item) => (
          <Tweet
            key={item.id.toString()}
            id={item.id.toString()}
            imageURL={item.user.profileImageURLHttps}
            name={item.user.name}
            screenName={item.user.screenName}
            date={new Date(item.createdAt).toLocaleString()}
            text={item.text}
            onDragStartCallback={onDragStartCallback}
          />
        ))}
      {(!tweetData.tweets || !tweetData.tweets.length > 0) && message && (
        <div className="tweet-results-message">{message}</div>
      )}
    </div>
  );
};

export default TweetList;
