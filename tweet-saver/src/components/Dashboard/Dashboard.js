import React from "react";
import SavedTweets from "../SavedTweets";
import SearchBox from "../SearchBox";
import TweetList from "../TweetList";
import Heading from "../Heading";

const Dashboard = () => {
  return (
    <>
      <Heading level={1} text="Tweet Saver" />
      <SearchBox />
      <TweetList />
      <SavedTweets />
    </>
  );
};

export default Dashboard;
