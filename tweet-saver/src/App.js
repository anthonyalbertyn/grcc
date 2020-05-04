import React from "react";
import "./App.css";
import SavedTweets from "./components/SavedTweets";
import Search from "./components/Search";
import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";

const App = () => {
  return (
    <div className="app">
      <div>App</div>
      <Search />
      <TweetList />
      <Tweet />
      <SavedTweets />
    </div>
  );
};

export default App;
