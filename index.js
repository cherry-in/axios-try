const { default: axios } = require("axios");
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/w3c", async (req, res) => {
  const { data } = await axios.get(
    "https://www.w3schools.com/html/default.asp"
  );
  fs.writeFileSync("test1.txt", data, "utf8");

  res.send(data);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server is working : PORT - ", port);
});
