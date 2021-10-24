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

## APIs and RESTful API Design

so now we know that how to use express and build api but first let's talk about APIs and RESTful API on a higher level,

### WHAT IS AN API ANYWAY?

API Stand for

- Application
- Programing
- Interface

Application Programing Interface: a pice of software that can be used by another piece of software, in order to allow to talk each other.

### THE REST ARCHITECTURE

REST, Which Stand for

- Representational
- States
- Transfer

is basically a way of building web APIs in a logical way, making them easy to consume
<br>
in REST architecture we have some important principle

- separate API into logical **resources**
- expose structured, **resource-based URLs**
- use **HTTP method**
- send data as **JSON**
- must be state less

#### 1. resources

the key abstraction of information in REST is a resource, and therefor all the data we wanna share in the API should be divided into logical resources.
<br>
what is resources?
object or representation of something, which has data associated to it, like name, user, reviews.

#### 2. resource-based URLs (expose structured)

like : https://www.example.com/addneW
U R L S ENDPOINT

MAKE A CURD operation
C = create (http method: POST)
R = Read (http method: GET )
U = Update(http method: PUT/PATCH)
D = delete (http method: DELETE)

#### JSON

json stand for

- javascript
- object
- notation

json is a very lite weight data interchange format, which is heavily used by web APIs coded is any programing language.

#### Stateless

stateless RESTful API: All state is handle on the client. this means that each request must contain all the necessary to process a certain request the server should not have to remember pervious requests.
