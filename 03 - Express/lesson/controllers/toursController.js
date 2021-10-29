const fs = require("fs");
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
// handler
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
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

exports.createTour = (req, res) => {
  // req store the all data because client send us data.
  console.log(req.body);
  res.send("done");
};
exports.updateTour = (req, res) => {
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
exports.deleteTour = (req, res) => {
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
