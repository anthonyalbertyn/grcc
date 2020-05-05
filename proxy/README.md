# Proxy server

Author: Anthony Albertyn

If there are any problems starting athe proxy server,
please contact the author.

## API for tweets

To avoid CORS issues in the Tweet Saver app, I have setup a proxy server. The proxy server needs to be started before using the app.

The proxy server runs on Node and uses Express. To start the proxy server
from the project root:

cd proxy
yarn start

The proxy server will be available from localhost:4000

To test that the proxy server is working, go to this url: http://localhost:4000/api/?q=Obama&count=10

You should see JSON output to the page that matches the search
Both q and count parameters are required for the endpoint to work when you test this.
