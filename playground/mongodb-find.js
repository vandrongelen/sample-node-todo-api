const { MongoClient, ObjectID } = require('mongoDB');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5be16746b13bca7ebc9bc277')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // ('Users').find({
  //   name: 'Casey'
  // }).count().then((count) => {
  //   console.log(`Users count Casey: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.close();

  /* eslint-disable */

  db.collection('Todos').find().forEach(function(document) {
    var value = document.amphibian;
    // You need a strategie for names with more then 2 words
    db.collection('Todos').update(
      { _id: document._id },
      { 
        $set: {
          'newkey': value,
        }
      }
    )
  });

  db.close();
  /* eslint-enable */
});
