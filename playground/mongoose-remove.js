const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result)
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5bf42af1a577c5605db17955'}).then((todo) => {
//   console.log(todo);
// });


Todo.findByIdAndRemove('5bf42af1a577c5605db17955').then((todo) => {
  console.log(todo);
});