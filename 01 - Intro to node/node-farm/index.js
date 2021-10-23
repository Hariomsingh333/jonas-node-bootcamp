// for file system
const fs = require("fs");
// for create server
const http = require("http");
// for routing
const url = require("url");
// for home template html
const home = fs.readFileSync(`${__dirname}/templates/overview.html`);

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
  } else if (path === "/api") {
    // read the file using fs
    // "__dirname === ./"
    fs.readFile("./dev-data/data.json", "utf-8", (err, data) => {
      // convert to json
      // const productData = JSON.parse(data);
      // console.log(productData);
      // say to browser that we can send json in browser
      res.writeHead(200, { "content-type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("page not found 404");
  }
});

server.listen(3000, () => {
  console.log("you server is on in localhost");
});
