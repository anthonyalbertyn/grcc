import React, { useState, useEffect } from "react";
import SavedTweets from "../SavedTweets";
import SearchBox from "../SearchBox";
import TweetList from "../TweetList";
import Heading from "../Heading";

const Dashboard = ({
  endpoint = "http://localhost:4000/api/",
  numberTweets = 10,
}) => {
  const [tweetData, setTweetData] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResultsMessage, setSearchResultsMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [savedTweets, setSavedTweets] = useState([]);

  const handleOnSearch = (query) => {
    setQuery(query);
  };

  useEffect(() => {}, []);
  useEffect(() => {
    const encodedQuery = encodeURIComponent(query);
    const URL = `${endpoint}?q=${encodedQuery}&count=${numberTweets}`;
    if (query) {
      fetch(URL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.statusText);
        })
        .then((result) => {
          setTweetData(result);
          if (result.tweets && result.tweets.length > 0) {
            setTweetData(result);
          } else {
            setSearchResultsMessage("No tweets currently match your search");
            setTweetData();
          }
        })
        .catch((e) => {
          console.error(e);
          setSearchResultsMessage(
            "There was a problem fetching tweet resuts, please try again"
          );
          setTweetData();
        });
    }
  }, [query, endpoint, numberTweets]);

  return (
    <div className="dashboard">
      <Heading level={1} text="Tweet Saver" />
      <div className="dashboard-tweets-wrapper">
        <div className="dashboard-tweets">
          <SearchBox onSearchCallback={handleOnSearch} />
          <TweetList tweetData={tweetData} message={searchResultsMessage} />
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
