import React from "react";
import Tweet from "../Tweet";

const SavedTweets = ({ tweets = [], onDropCallback }) => {
  const handleOnDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    onDropCallback(event);
  };
  return (
    <div
      className="saved-tweets"
      onDrop={handleDrop}
      onDragOver={handleOnDragOver}
    >
      {tweets &&
        tweets.length > 0 &&
        tweets.map((item) => (
          <Tweet
            key={item.id + "-saved"}
            id={item.id + "-saved"}
            imageURL={item.imageURL}
            name={item.name}
            screenName={item.screenName}
            date={item.date}
            text={item.text}
            isSavedTweet={true}
          />
        ))}
    </div>
  );
};

export default SavedTweets;
