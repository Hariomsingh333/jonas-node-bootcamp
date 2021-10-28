// require express
const { json } = require("express");
const express = require("express");
// set express
const app = express();
const fs = require("fs");

const morgan = require("morgan");

const path = require("path");

app.use(morgan("dev"));
// middleware for post request (replace of body-parser)
app.use(express.json());

// creating our own middleware function
app.use((req, res, next) => {
  console.log("Hello from middleware function");
  next();
});
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

// define all of the callback function
const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
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
};

const createTour = (req, res) => {
  // req store the all data because client send us data.
  console.log(req.body);
  res.send("done");
};
const updateTour = (req, res) => {
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
};
const deleteTour = (req, res) => {
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
};

// // all routes
// app.get("/api/v1/tours", getAllTours);
// //responding to url parameters
// app.get("/api/v1/tours/:id", getTour);
// // let's create a post request
// // remember in post request we send data to client to server.
// app.post("/api/v1/tours", createTour);
// // patch request for update data
// app.patch("/api/v1/tours/:id", updateTour);
// // handling delete request
// app.delete("/api/v1/tours/:id", deleteTour);

// using the app.route() method and define the all route at once
app.route("/api/v1/tours").get(getAllTours).post(createTour);

app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);
// server the app
const port = 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
