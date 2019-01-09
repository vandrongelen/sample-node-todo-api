const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');




var id = '5bead3a4c4a3824383440e461';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => {
//   console.log(e);
// });

// User.findById -no user found - user found - no valid id

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// User.findById('5beadde1fe824c11de6aa96b').then((user) => {
//   if (!user) {
//     return console.log('User not found');
//   }

//   console.log('User by Id', user);
// }).catch((e) => {
//   console.log(e);
// });
