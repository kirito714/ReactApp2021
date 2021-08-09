require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const db = require("./config/connection");
const { URLSearchParams } = require("url");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// MOVE ALL OF THE BELOW CODE
app.get("/weather", async function (req, res) {
  try {
    const params = new URLSearchParams({
      ...req.query,
      appid: process.env.OPEN_WEATHER_API_KEY,
    }).toString();

    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?${params}`
    );

    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: "Server Failed",
    });
  }
});
app.get("/events", async function (req, res) {
  try {
    const params = new URLSearchParams({
      ...req.query,
    }).toString();

    const { data } = await axios.get(
      `https://api.predicthq.com/v1/events?${params}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PREDICT_HQ_API_KEY}`,
        },
      }
    );

    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: "Server Failed",
    });
  }
});

// MOVE ALL OF THE ABOVE CODE

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
