// for file system
const fs = require("fs");
// for create server
const http = require("http");
// for routing
const url = require("url");
// for home template html
const home = fs.readFileSync(`${__dirname}/template/index.html`);

// our sever
const server = http.createServer((req, res) => {
  const path = req.url;
  // our route
  if (path === "/") {
    // serve a html page
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(home);
  } else if (path === "/product") {
    res.end("this is product path");
  } else {
    res.writeHead(404);
    res.end("page not found 404");
  }
});

server.listen(3000, () => {
  console.log("you server is on in localhost");
});
