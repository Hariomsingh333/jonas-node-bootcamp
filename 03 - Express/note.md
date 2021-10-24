# Date: 24 / 10 / 2021

# Express

## What is Express?

so the logic question is now **WHAT IS EXPRESS** AND **WHY SHOULD WE USE IT**.
<br>
Express is minimal node.js framework, which means it actually built on top of node.js,it's also a most popular node.js framework

- Express contains a very robust set of features: complex routing, easier handling of request and responses, middleware, server-side rendering etc.

- Express makes it easier to organize our application into the MVS architecture.

### Postman

before we go and write some express code, let install a tool called postman and it is a great app for backend development.
<br>
postman is beautiful tool that's allows to to API testing. it like browser dev tool but is not load any kind of html or any visible website to us.
<br>
instead we can do all kind of requests and then receive the response simply as text then work with that response.
<br>

**POSTMAN SIMPLIFIES API DEVELOPMENT**

<br>

### let's work with express

so fast of all we create our package.json using

```js
npm init
// npm init -y
```

so is time to install express

```js
npm i express
```

so now use express.

- first require the express
- then set the express to app variable
- create a home route (using the http method like: get/post)
- server the server

```js
// require express
const express = require("express");
// set express
const app = express();

// create routes

app.get("/", (req, res) => {
  res.send("hello world");
});

// server the app
const port = 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
```
