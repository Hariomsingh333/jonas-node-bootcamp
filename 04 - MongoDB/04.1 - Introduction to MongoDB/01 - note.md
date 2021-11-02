# Date: 1 / 11 / 2021

# Intro to MongoDB

## What is MongoDB

MongoDB is a Database, and it's a so-called NoSQL Database.
**"MongoDB is a document database with the scalability and flexibility that you want with querying and indexing that you need**

### KEY MONGODB FEATURES:

- **Document based:** MongoDB stores data in documents(field-value pair data structures (like - JSON), NoSQL)
- **Scalable:** Very easy to distribute data across multiple machines as your users and amount of data grows
- **Flexible:** No document data schema required, so each document can have different number and type of fields
- **Performant:** Embedded data models,, indexing, sharding, flexible documents, native duplication, etc.
- free and open-source database

<br>

- each database can contain one or more collections _(COLLECTIONS - TABLE)_.
- each collection can contain one or more data structures called documents _(DOCUMENT - ROWS)_ row in a table.

### Install mongoDb

install mongodb ..

## Creating a local database

just write in terminal **mongo**, and this will open the Mongo Shell

```bash
mongo
```

### Create our first database

so create our first database using _"use"_ and then the name of the database that we want to create.

```bash
use myDataBase
```

- and remember inside the database we use collection and inside the collection we use document.
- anything we create in mongoShell is always documents.

### Create our first collection

so we need to create collection under database that we create using use keyword

```bash
db.tours.insertOne({ name: "the forest hiker", price: 297, rating: 4.7})
```

- db mean create any thing in this data base were you currently live
- tours is collection name
- and then insertOne({data: "data"}), insertMany({data : "data"}, {data: "data"}) using this method to create our collection

<br>

to see the collection

```bash
db.tours.find()
```

### some mongo command

to see all database

```bash
show dbs
```

to see all collection

```bash
show collections
```

to quit in mongoShell

```bash
quit() || exit
```
