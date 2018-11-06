const {MongoClient, ObjectID} = require('mongoDB');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Repair bike'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Repair bike'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Casey'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({
     _id: new ObjectID('5be1596cd49a3f21a804da4e')
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
