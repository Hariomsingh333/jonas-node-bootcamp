# Date: 6 / 11 / 2021

# Creating a Hosted Database with Atlas

**let's create a remote database using MongoDb Atlas**, so for developing our project we will actually not use a local database on our computer like we've been doing in the mongoDB shell,
<br>

_so instead, we're gonna use a remote database hosted on a service called Atlas_

go to mongoDb website and search for **MongoDB Atlas**.
<br>

[link to atlas](https://www.mongodb.com/atlas)
<br>
so Atlas is so-called database as service provider which takes all the pain of managing and scaling databases away from us. so it's also extremely useful to always have our data basically in the cloud, because this way we can develop our application from everywhere.

### step

- fist go to the link and log in
- create a new database or new project
- type your name
- set your self to project owner ( by default enabled)
- create project

now you create the project, now it time build a cluster

<br>

wait some time, your cluster and project is ready to use

## Connecting local to our hosted database

let's now connect our remote hosted database with the mongo shell.

- click the connect button on your cluster
- add current ip address
- add username
- add password
- chose a connection
- select the mongoDB shell
- copy the link
- paste in your terminal and hit enter
- fill the password
- your connection is ok

<br>
switch to your database

```bash
use yourAppName
```

then create your collection

```bash
db.collectionName.insertOne({name: "cool", price: 45})
```

then find it

```bash
db.collections.find()
```
