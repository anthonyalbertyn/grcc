# Tweet Saver

Author: Anthony Albertyn

If there are any problems starting and testing the app and proxy server,
please contact the author.

This app is available at: https://github.com/anthonyalbertyn/grcc/

## Description

This is a coding challange completed for a company. They provided an endpoint
to a REST server at http://tweetsaver.herokuapp.com/ that produces tweets.
The endpoint has two parameters, 'q' for the search query and 'count' for the
number of tweets to be returned in the response. The response is in JSON format.
This endpoint will eventually stop working once the organisation disables it.

## Coding challenge

- Display a search box to search for tweets
- 10 tweets that match the search query are listed in a container below the search box
- User can drag a tweet from the search results to a saved tweets box
- On drop, the tweet is saved to local storage and saved also displayed in the saved tweets box
- If a user refreshes the screen, the app loads the tweets from local storage into the saved tweets box
- If a user saves more tweets, these will be prepended to existing saved tweets
- Removing saved tweets is outside of the scope of this task

## API for tweets

To avoid CORS issues, I have setup a proxy server. The proxy server needs to be started before using the app.

The proxy server runs on Node and uses Express. To start the proxy server
from the project root:

cd proxy
yarn install
yarn start

The proxy server will be available from localhost:4000
To test that the proxy server is working, go to this url: http://localhost:4000/api/?q=Obama&count=10
You should see JSON output to the page that matches the search
Both q and count parameters are required for the endpoint to work when you test this.

## App for Tweet Saver

The app for Tweet Saver is a single page application built with React and JavaScript.
Start after starting the proxy server

From the project root:

cd tweet-saver
yarn install
yarn start

The app can be found at http://localhost:3000

For more information, see the README file in tweet-saver directory

## Tests for App

To run test for the App, first make sure you have the app working (done yarn install and yarn start),
then from the project root directory:

yarn test

The unit tests are using Jest and Enzyme. There is a reasonable test coverage, but for production work
I would write more unit tests to check dragging and dropping behavior and loading and saving of tweets.
