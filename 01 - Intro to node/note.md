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
