const express = require("express");
const axios = require("axios");
const app = express();

app.use("/", (_, res) => {
  res.send("Hello api");
});

app.use("/names", (_, res) => {});

app.listen(3000, () => {
  console.log("app started");
});
