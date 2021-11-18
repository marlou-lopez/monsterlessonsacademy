require("dotenv").config();

const express = require("express");
const axios = require("axios");
const app = express();
const apiUrl = "https://randommer.io/api/Name?nameType=fullname&quantity=20";

console.log("apiToken", process.env.RANDOMER_API_TOKEN);

app.get("/", (_, res) => {
  res.send("Hello api");
});

app.get("/names", async (_, res, next) => {
  try {
    if (!process.env.RANDOMER_API_TOKEN) {
      throw "You forgot to set RANDOMER_API_TOKEN";
    }
    const result = await axios.get(apiUrl, {
      headers: { "X-Api-Key": process.env.RANDOMER_API_TOKEN },
    });

    res.json(result.data);
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log("app started");
});
