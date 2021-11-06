// require express

const express = require("express");
// set express
const app = express();

const path = require("path");
const toursRoute = require("./routes/toursRoute");
const usersRoute = require("./routes/usersRoute");

app.use(express.json());

// app.use(express.static(`${__dirname}/public`));
app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/home.html`));
});
// routes
app.use("/api/v1/tours", toursRoute);
app.use("/api/v1/users", usersRoute);

module.exports = app;
