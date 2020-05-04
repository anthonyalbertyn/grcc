const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const Bluebird = require("bluebird");

fetch.Promise = Bluebird;

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Proxy server"));

app.get("/api/", (req, res, next) => {
  const query = req.query.q;
  const count = req.query.count;
  const endpoint = "http://tweetsaver.herokuapp.com/";
  const URL = endpoint + "?q=" + query + "&count=" + count;
  console.log(URL);

  fetch(URL)
    .then((response) => {
      if (response.ok) {
        console.log("response:", response);
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((data) => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    })
    .catch(next);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
