import React from "react";
import SavedTweets from "../SavedTweets";
import SearchBox from "../SearchBox";
import TweetList from "../TweetList";
import Heading from "../Heading";

const Dashboard = () => {
  return (
    <>
      <Heading level={1} text="Tweet Saver" />
      <p>Dashboard</p>
      <SearchBox />
      <TweetList />
      <SavedTweets />
    </>
  );
};

export default Dashboard;
