const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
// server the app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
