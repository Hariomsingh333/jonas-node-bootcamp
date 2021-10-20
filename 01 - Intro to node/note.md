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
