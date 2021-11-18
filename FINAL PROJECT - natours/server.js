const app = require("./app");
const dotenv = require("dotenv");
// set mongoose
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then((con) => {
    // console.log(con.connection);
    console.log("DB CONNECTION SUCCESSFUL");
  })
  .catch((err) => {
    console.log(err);
  });

// mongoose schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
});
// mongoose model
const Tour = mongoose.model("Tour", tourSchema);
// server the app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
