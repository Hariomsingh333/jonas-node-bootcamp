// require express
const { json } = require("express");
const express = require("express");
// set express
const app = express();
const fs = require("fs");

const path = require("path");
// create routes

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/json", (req, res) => {
//   res
//     // .status(200)
//     .json({ msg: "hello world from server in json", app: "express" });
// });
// // server a html file using express
// app.get("/user", (req, res) => {
//   res.sendFile(path.join(__dirname, "./user.html"));
// });

// let's create our first get route
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
});

// server the app
const port = 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
