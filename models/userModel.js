const mongoose = require('mongoose');

const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'a user must have a name']
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function(element) {
        return emailRegex.test(element);
      },
      message: props => `${props.element} is not a valid email!`
    },
    required: [true, 'a user must provide an email']
  },
  emailConfirmed: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: 'default.jpg'
  },
  role: {
    type: String,
    enum: ['admin', 'private', 'business', 'group'],
    default: 'private'
  },
  password: {
    type: String,
    required: [true, 'a user password is required'],
    minLength: [8, 'a password must include 8 characters'],
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'A confirmed password is required'],
    validate: {
      validator: function(element) {
        return element === this.password;
      },
      message: props => 'passwords do not match'
    },
    select: false
  },
  passwordChangetAt: Date,
  passwordResetToken: String,
  passwortResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  },
  calendar: {
    type: mongoose.Schema.ObjectId,
    ref: 'Calendar'
  }
});
const User = new mongoose.model('User', userSchema);

module.exports = User;
