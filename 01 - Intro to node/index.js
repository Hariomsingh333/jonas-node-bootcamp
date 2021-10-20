"use strict";
// fs
// fs stand for file system
const fs = require("fs");

// for creating a server
const http = require("http");

const program = "hello world";
console.log(program);

// create a server
const server = http.createServer((req, res) => {
  res.end("hello from the server");
});
//listing
server.listen(3000, () => {
  console.log("your server is on");
});
