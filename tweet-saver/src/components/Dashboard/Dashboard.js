import React from "react";
import SavedTweets from "../SavedTweets";
import SearchBox from "../SearchBox";
import TweetList from "../TweetList";

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
      <SearchBox />
      <TweetList />
      <SavedTweets />
    </>
  );
};

export default Dashboard;
