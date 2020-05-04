import React from "react";
import SavedTweets from "../SavedTweets";
import SearchBox from "../SearchBox";
import TweetList from "../TweetList";
import Heading from "../Heading";

const Dashboard = () => {
  return (
    <div className="dasgboard">
      <Heading level={1} text="Tweet Saver" />
      <div className="dashboard-tweets-wrapper">
        <div className="dashboard-tweets">
          <SearchBox />
          <TweetList />
        </div>
        <div className="dashboard-saved-tweets">
          <div className="dashboard-saved-tweets-heading">Saved Tweets</div>
          <SavedTweets />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
