// require express
const express = require("express");
// set express
const app = express();

// create routes

app.get("/", (req, res) => {
  res.send("hello world");
});

// server the app
const port = 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
