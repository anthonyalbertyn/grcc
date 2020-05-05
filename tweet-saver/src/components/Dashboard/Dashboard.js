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
  const [savedTweets, setSavedTweets] = useState([]);
  const [tweetsToSave, setTweetsToSave] = useState([]);

  const handleSearch = (query) => {
    setQuery(query);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const jsonDataForTweet = event.dataTransfer.getData("dataForTweet");
    const dataForTweet = JSON.parse(jsonDataForTweet);
    if (dataForTweet) {
      setTweetsToSave([dataForTweet, ...savedTweets]);
    }
  };

  const getTweetData = (tweetId = "") => {
    let dataForTweet;
    if (tweetData && tweetData.tweets && tweetData.tweets.length > 0) {
      const filteredTweets = tweetData.tweets.filter(
        (item) => item.id === parseInt(tweetId, 10)
      );
      if (filteredTweets.length > 0) {
        const item = filteredTweets[0];
        dataForTweet = {
          id: item.id.toString(),
          imageURL: item.user.profileImageURLHttps,
          name: item.name,
          screenName: item.user.screenName,
          date: new Date(item.createdAt).toLocaleString(),
          text: item.text,
        };
      }
    }
    return dataForTweet;
  };

  const handleDragStart = (event) => {
    const dataForTweet = getTweetData(event.target.id);
    const jsonDataForTweet = JSON.stringify(dataForTweet);
    if (dataForTweet.id && jsonDataForTweet) {
      event.dataTransfer.setData("dataForTweet", jsonDataForTweet);
    }
  };

  useEffect(() => {
    if (tweetsToSave && tweetsToSave.length > 0) {
      const data = JSON.stringify(tweetsToSave);
      if (data) {
        localStorage.setItem("tweets", data);
        setTweetsToSave([]);
      }
    }
  }, [tweetsToSave]);

  useEffect(() => {
    const localSavedTweets = localStorage.getItem("tweets");
    const tweetsArray = JSON.parse(localSavedTweets);
    if (tweetsArray && tweetsArray.length > 0) {
      setSavedTweets(tweetsArray);
    }
  }, [tweetsToSave]);

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
          <SearchBox onSearchCallback={handleSearch} />
          <TweetList
            tweetData={tweetData}
            message={searchResultsMessage}
            onDragStartCallback={handleDragStart}
          />
        </div>
        <div className="dashboard-saved-tweets">
          <div className="dashboard-saved-tweets-heading">Saved Tweets</div>
          <SavedTweets tweets={savedTweets} onDropCallback={handleDrop} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
