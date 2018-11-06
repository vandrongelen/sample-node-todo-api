// const MongoClient = require('mongoDB').MongoClient;
const {MongoClient, ObjectID} = require('mongoDB'); // this is identical as the above

// var obj = new ObjectID();
// console.log(obj.getTimestamp());

// Destructuring es6 way
// var user = {name: 'Kees', age: 59, location: 'London'};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // Insert new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Casey',
  //   age: 59,
  //   location: 'Amsterdam'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // })

  db.close();
});
