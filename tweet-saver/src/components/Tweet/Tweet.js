import React from "react";

const Tweet = ({
  imageURL = "",
  screenName = "",
  name = "",
  date = "",
  text = "",
}) => {
  return (
    <div className="tweet">
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
