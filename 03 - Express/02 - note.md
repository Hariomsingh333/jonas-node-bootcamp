# Date: 27 / 10 / 2021

## Refactoring Our Routes

so basically reorganize some of our route to make the code a lot better. so right now we have all the route in the same place, our route's http method and the url are the same place together with the rote handler which is this callback function.
<br>
see all (http method, route, callback function) all are the same place

```js
//responding to url parameters
app.get("/api/v1/tours/:id", (req, res) => {
  // console.log(req.params); // {id: "5"}

  // convert id string to number just multiply
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: "fall",
      message: "wrong id 404 page",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});
```

**And we have these routes and route handlers kind all over the place in the same file**
_but it's kind of difficult to see what route we actually have in our code._
<br>
so what we can do go ahead and basically export all of these handler functions into their own function.
<br>

### separate the callback function

we can separate the callback function, and then define in our route.

```js
// define all of the callback function
const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
};

// define the function in our route
// all routes
app.get("/api/v1/tours", getAllTours);
```

we can separate the all route using the trick

```js
// all routes
app.get("/api/v1/tours", getAllTours);
//responding to url parameters
app.get("/api/v1/tours/:id", getTour);
// let's create a post request
// remember in post request we send data to client to server.
app.post("/api/v1/tours", createTour);
// patch request for update data
app.patch("/api/v1/tours/:id", updateTour);
// handling delete request
app.delete("/api/v1/tours/:id", deleteTour);
```

- but here we have one problem, if we want to change the route the we need to change the all route, and that not good, keep try that write DRY code (Don't Repeat Yourself).

<br>

so we can use the **app.route()** and define all http method is one line or one route

```js
// using the app.route() method and define the all route at once
app.route("/api/v1/tours").get(getAllTours).post(createTour);

app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);
```

using this refactoring routes trick our code is lot structure and not meshes.

- recap
  first we separate our callback-function.and then we specify in our route.
  <br>
  second we use same (one) route to all http method like (get, patch, delete), using app.route() method.
  <br>
  that we can change the one route and implement to others.

# date: 28 / 10 / 2021

## Middleware and the request-response cycle

when we hit any express app then we are create a request-response cycle and send the request data object to response.

### What is Middleware?

it's called middleware because it's a function that is executed between, so in the middle of the receiving the request and sending the response.

**and actually, we can say that in express,everything is a middleware even our route definitions.**

some example of middleware is _express.json()_ which is also called body-parser,

the possibilities are really endless with middleware.

## creating our own middleware

example of middleware

```js
app.use(express.json());
```

so yes we use **app.use()** for middleware.
<br>
like for get request we use app.get() so in use to middleware we use app.use()

```js
// creating our own middleware function
app.use((req, res, next) => {
  console.log("Hello from middleware function");
  next();
});
```

so in middleware we define 3 parameter(arguments) (req, res, next) next for if this is not then move on.

- next argument alway be in third position.
  - never forget to call the next function in all of your middleware.

**and if we did't call the next function here well then the request/response cycle would really be stuck at this point. we wouldn't be able to move on and we would never ever send back a response to the client.**

## Using 3rd-party Middleware

lets now use a 3rd-party middleware from npm called **Morgan** in order to make our development life a bit easier.

```js
npm i morgan
```

first of require to our main express file

```js
const morgan = require("morgan");
```

### morgan middleware what is used for

morgan middleware is just let you know which type of request you get it should be **get** or **post** what the route and how much time to load the route and that kind of thing

```js
app.use(morgan("dev"));
// GET /api/v1/tours 304 4.693 ms - -
```

## creating and mounting multiple routes

in this section thing to get a bit advanced. and that is because we'll now create multiple routes and use a process called mounting.
<br>

let keep in mind that the ultimate goal will be to separate all the code that we have in that _app.js_ file into multiple files.

- one file that only contains all of these routes
  - tours
  - users
- i will also want to have a file which contains the handlers

## separate the route, creating our own router

now we can say that our all routes that they're all kind of on a same router, Okay? and the router, is the app object. but if we want to separate these routes into different files then the best think to do create our own router for each of this resources.

_first we need to require our router_

```js
const toursRoute = express.Router();
```

now we create a router using **express.Router** function. and stor in a variable
<br>
so now let's use that router for our routes

```js
// app.route("/api/v1/tours").get(getAllTours).post(createTour);

// app
//   .route("/api/v1/tours/:id")
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);

toursRoute.route("/api/v1/tours").get(getAllTours).post(createTour);

toursRoute
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);
```

now how do we connect the routes with our application? _well we'll use it as middleware, alright?_

```js
app.use("/api/v1/tours", toursRoute);
```

```js
const toursRoute = express.Router();
app.use("/api/v1/tours", toursRoute);
toursRoute.route("/").get(getAllTours).post(createTour);

toursRoute.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);
```

# Date: 31 / 10 / 2021

## Param Middleware

so param middleware a middleware that only runs for certain parameters, so basically when we have a certain parameter in our url.
<br>

now in our example here, the only parameter that we might have in our route URL is the **id**.

```js
// param middleware
router.param("id", (req, res, next, val) => {
  console.log(`here is your param ${val}`);
  next();
});
```

- that val stand for value in the one that will actually hold the value of the id parameter.

## Serve Static file

let's learn how server static file using express.
<br>
what i mean a static file, static file mean a file that live in our currently file system like we public/home.html file in our file system
<br>
but we cannot access using a route,
<br>
so how to serve the html file using express and make a route for this html page that any hit the route then show the html page
<br>
we need to use builtin express middleware.

```js
// app.js
app.use(express.static(`${__dirname}/public`));
```

- we need to create a public folder, under the public folder we need to create a html page.
- then hit the localhost:3000/youname.html

### 2nd way to server html file using express

```js
// app.js
const path = require("path");
app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/home.html`));
});
```