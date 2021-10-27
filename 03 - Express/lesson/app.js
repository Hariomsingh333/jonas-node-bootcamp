// require express
const { json } = require("express");
const express = require("express");
// set express
const app = express();
const fs = require("fs");

const path = require("path");
// middle ware for post
app.use(express.json());
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
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
});

//responding to url parameters
app.get("/api/v1/tours/:id", (req, res) => {
  // console.log(req.params); // {id: "5"}

  // convert id string to number just multiply
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: "fall",
      message: "wrong id 404 page",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});
// let's create a post request
// remember in post request we send data to client to server.
app.post("/api/v1/tours", (req, res) => {
  // req store the all data because client send us data.
  console.log(req.body);
  res.send("done");
});

// patch request for update data
app.patch("/api/v1/tours/:id", (req, res) => {
  // 404 not found
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "you id is wrong",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      tours: "<Update .........>",
    },
  });
});
// handling delete request

app.delete("/api/v1/tours/:id", (req, res) => {
  // 204 means not content, when we handle with delete method we use 204 status code.
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "you id is wrong 404 not found",
    });
  }
  res.status(204).json({
    status: "success delete",
    data: "null",
  });
});

// server the app
const port = 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
