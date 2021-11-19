const express = require("express");

const router = express.Router();

const toursController = require("../controllers/toursController");
// routes
router
  .route("/")
  .get(toursController.getAllTours)
  .post(toursController.createTour);

// param middleware
// router.param("id", toursController.prams);

router
  .route("/:id")
  .get(toursController.getTour)
  .patch(toursController.updateTour)
  .delete(toursController.deleteTour);

module.exports = router;
