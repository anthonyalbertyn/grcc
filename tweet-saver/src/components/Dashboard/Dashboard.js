import React from "react";
import SavedTweets from "../SavedTweets";
import Search from "../Search";
import TweetList from "../TweetList";

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
      <Search />
      <TweetList />
      <SavedTweets />
    </>
  );
};

export default Dashboard;
