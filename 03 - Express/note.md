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

## serve a html using express

```js
// server a html file using express
app.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "./user.html"));
});
```

## adding our first get request

```js
// let's create our first get route
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
});

// server the app
const port = 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
```

now we are create a hard coded data and save as a json file but in future we use nosql database that simlar to json, so in future we use data base not a json file.

## Handling post request

so always remember when you send deal with get request it's mean we send something server to client
<br>
but when we deal with post it's mean we take some thing client
<br>

let see how to create any thing using post request, one more thing now we are using json file to store data so in later we use database so this is just for practice

```js
// let's create a post request

// remember in post request we send data to client to server.
app.post("/api/v1/tours", (req, res) => {
  // req store the all data because client send us data.
  console.log(req.body);
  res.send("done");
});

// server the app
const port = 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
```

## Responding to URL parameters

let learn about url parameters.
<br>
so when we hit this url we get all the file

```js
localhost: 3000 / api / v1 / tours;

// 127.0.0.1:3000/api/v1/tours
```

but we need see only one file with the change of url, mean when we hit this url then we get only one item

```js
localhost: 3000 / api / v1 / tours / 5;
```

so how we do that
<br>
so first of all we need to create a variable to our route, because 5 or any number is the data that can store some were.

```js
// create a variable in our route
app.get("/api/v1/tours/:id", (req, res)=>{
```

so there id /:id is the variable,
<br>

log in the console what we request to in the :id variable

```js
app.get("/api/v1/tours/:id", (req, res) => {
  // params mean parameter
  console.log(req.params); // {id: "5"}
});
```

```js
//responding to url parameters
app.get("/api/v1/tours/:id", (req, res) => {
  // console.log(req.params); // {id: "5"}
  const { id } = req.params.id;
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});
```

remember this is only practice, we deal with data base later but the concept is the same

## Handling PATCH requests

Handling PATCH requests for update data.

```js
// patch request for update data
app.patch("/api/v1/tours/:id", (req, res) => {
  // 404 not found
  // req.params.id is string, we need to change in number so we multiply by 1 and its convert to number
  // req.params.id = :id
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "you id is wrong",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      tours: "Updating.........",
    },
  });
});
```

## Handling Delete request

when we deal with delete method the we send 204 http status code, 204 mean nothing there, use for delete.

```js
app.delete("/api/v1/tours/:id", (req, res) => {
  // 204 means not content, when we handle with delete method we use 204 status code.
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "you id is wrong 404 not found",
    });
  }
  res.status(204).json({
    status: "success delete",
    data: "null",
  });
});
```

- now we add CRUD
  CRUD stand for
- C = CREATE (post)
- R = READ (get)
- U = UPDATE (patch)
- D = DELETE (delete)
  **one thing remember this is just practice with some json data, but we use database later but the principal is same so this is just practice**

now this is end of this note and note2 we learn about how to organize code and how to write code without mesh and next note2 is important.
