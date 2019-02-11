const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'casey@example.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId.toHexString(), access: 'auth' }, 'abc123').toString()
  }]
}, {
  _id: userTwoId,
  email: 'test@example.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId.toHexString(), access: 'auth' }, 'abc123').toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: userOneId,
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333,
  _creator: userTwoId,
}];

const populateUsers = (done) => {
  Todo.remove({}).then(() => { 
    Todo.insertMany(todos) 
  }).then(() => done());
};

const populateTodos = (done) => {
  User.remove({}).then(() => { 
    const UserOne = new User(users[0]).save();
    const UserTwo = new User(users[1]).save();

    return Promise.all([UserOne, UserTwo]);
  }).then(() => done());
};

module.exports = {
  todos,
  users,
  populateTodos,
  populateUsers,
};