// require express

const express = require("express");
// set express
const app = express();

const toursRoute = require("./routes/toursRoute");
const usersRoute = require("./routes/usersRoute");

app.use(express.json());

// routes
app.use("/api/v1/tours", toursRoute);
app.use("/api/v1/users", usersRoute);

module.exports = app;
