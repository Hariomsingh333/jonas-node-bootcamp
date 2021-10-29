const app = require("./app");

// server the app
const port = 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
