const Tour = require("../models/tourModel");

// json data
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );
exports.prams = (req, res, next, val) => {
  // 404 not found
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "you id is wrong",
    });
  }
  console.log(`here is your param ${val}`);
  next();
};

// handler
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      data: {
        tours,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createTour = async (req, res) => {
  // create tour using mongoose model
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.prams.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: {
        error,
      },
    });
    console.log(error);
  }
};
exports.deleteTour = (req, res) => {};
