# Date: 20/10/2021

# intro to node

## Create a server using node

first we need to require a module called https.

```js
const http = require("http");
```

and this one that give us networking ability

```js
// create a server
const server = http.createServer((req, res) => {
  res.end("hello from the server");
});
//listing
server.listen(3000, () => {
  console.log("your server is on localhost");
});
```

```js
node index.js
```

## Routing

we can use routing to crete different path (route). we use express.js in later but now we can use a node.js module which is called "url"

```js
const url = require("url");
```

```js
// create a server
const server = http.createServer((req, res) => {
  // create a routing
  const urlReq = req.url;
  // console.log(urlReq);
  if (urlReq === "/hello") {
    res.end("hello from the server");
  } else if (urlReq === "/lorem") {
    res.end("i am lorem");
  }
});
//listing
server.listen(3000, () => {
  console.log("your server is on");
});
```

### 404 page

```js
  else {
    res.writeHead(404);
    res.end("page not found 404");
  }
```

# Date: 23 / 10 / 2021

# Build a very simple api

fast of all what is a api

## What is a API ?

API Stand for

- Application
- programing
- Interfaces

**A API IS A SERVES THAT WE CAN REQUEST SOME DATA**
so here we have dev-data folder we have some json data.

```js
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
```

## Serve a Html page

```js
// for file system
const fs = require("fs");
// for create server
const http = require("http");
// for routing
const url = require("url");
// for home template html
// "__dirname === ./
const home = fs.readFileSync(`${__dirname}/template/index.html`);

// our sever
const server = http.createServer((req, res) => {
  const path = req.url;
  // our route
  if (path === "/") {
    // serve a html page
    // say to browser that this is a html page and the http code is 200 mean fine using res.writeHead()
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
```
