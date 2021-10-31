# Date : 31 / 10 / 2021

# Environment Variables

we use environment variable for configuration settings for our applications.

- so first create a file called _config.env_
- now let's define some env variable

```env
PORT=3000
```

- but how to connect to our express app
- so connect to our express app we need to install a npm package _dotenv_

```npm
npm i dotenv
```

then go to our server.js file and require that dotenv file

```js
// server.js
const dotenv = require("dotenv");
```

then we need to config the dotenv to our config file

```js
dotenv.config({ path: "./config.env" });
```

this config read the variable from config.env and and save them into node js environment variables.

```js
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("you server is on in " + port);
});
```
