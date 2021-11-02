# Date: 2 / 11 / 2021

# CRUD

so CRUD STAND FOR

- C - CREATE
- R - READ
- U - UPDATE
- D - DELETE

## CRUD: Creating Documents

so the first one is about creating new documents.

```bash
db.tours.insertMany([{name: "the see explorer", price: 891, rating: 4.8}, {name "the shoe adventurer", price: 997, rating: 4.9, difficulty: "easy"}])
```

## CRUD: Reading Documents

Reading data in database is the most important part in database, starting with some simple one and then moving then to some advance

- the easy way

```bash
db.tours.find()
```

- to find with name

```bash
db.tours.find({name: "the forest hiker"})
```

and you can use this filter with any kind of things

```bash
db.tours.find({difficulty: "easy"})
```

#### Finding using condition operator

we have some condition operator

- **$lt** - less than
- **$gt** - grater than
- **$gte** - grater than equal too
- **$or** - or

```bash
#  a least one condition is true in on
db.tours.find({$or: [{price: {$lt: 500}}, {rating: {$gte: 4.8}}]})
```

## CRUD: Updating Documents

so lets now updating documents in mongo db using the mongo shell

- first we need select what we want to update
- second to pass the data that should be updated.
  so the first argument is basically a filter object.

- to update thing we need to use the **$set** operator
  - and then we set the price of name called the snow adventure

```bash
db.tours.updateOne({name: "The Snow Adventurer"}, {$set: {price: 597}})
```

## CRUD: Deleting Documents

lets delete all the documents that have rating greater than 4.8

- we need to use deleteMany method

```bash
db.tours.deleteMany({rating: {$gte: 4.8}})
```
