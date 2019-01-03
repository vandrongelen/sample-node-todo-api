const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} os not a valid email',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  tokens: [{
    access: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  }],
});

/* eslint-disable */

// Override method
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function() {
  const user = this;
  const access = 'auth';
  const token = jwt.sign({_id: user._id.toHexString(), access }, 'abc123').toString();

  user.tokens = user.tokens.concat([{access, token}]);

  // Cool return a promise in half so we can use it later.
  return user.save().then(() => {
    return token;
  })
};

/* eslint-enable */

const User = mongoose.model('User', UserSchema);

module.exports = {
  User,
}