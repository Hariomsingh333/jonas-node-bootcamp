// require express
const { json } = require("express");
const express = require("express");
// set express
const app = express();

const morgan = require("morgan");

const path = require("path");

const toursRoute = require("./routes/toursRoute");
const usersRoute = require("./routes/usersRoute");
// app.use(morgan("dev"));
// middleware for post request (replace of body-parser)
app.use(express.json());

// routes
app.use("/api/v1/tours", toursRoute);
app.use("/api/v1/users", usersRoute);
// server the app
const port = 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
