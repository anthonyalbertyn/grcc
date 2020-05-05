import React from "react";

const Tweet = ({
  id = "",
  imageURL = "",
  screenName = "",
  name = "",
  date = "",
  text = "",
  isSavedTweet,
  onDragStartCallback,
}) => {
  const handleOnDragStart = (event) => {
    if (!isSavedTweet) {
      onDragStartCallback(event);
    }
  };

  return (
    <div
      id={id}
      className="tweet"
      draggable={!isSavedTweet}
      onDragStart={handleOnDragStart}
    >
      <div className="tweet-avatar-wrapper">
        {imageURL && (
          <img className="tweet-avatar" src={imageURL} alt={screenName} />
        )}
      </div>
      <div className="tweet-details-wrapper">
        <div className="tweet-name-date-wrapper">
          <div className="tweet-name-wrapper">
            <span className="tweet-name">{name}</span>
            <span className="tweet-screen-name">
              {screenName && `@${screenName}`}
            </span>
          </div>
          <div className="tweet-date">{date}</div>
        </div>
        <div className="tweet-text">{text}</div>
      </div>
    </div>
  );
};

export default Tweet;
