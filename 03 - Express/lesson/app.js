// require express
const express = require("express");
// set express
const app = express();

const path = require("path");
// create routes

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/json", (req, res) => {
  res
    // .status(200)
    .json({ msg: "hello world from server in json", app: "express" });
});
// server a html file using express
app.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "./user.html"));
});
// server the app
const port = 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
