const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  address: {
    number: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String }
  }
});

UserSchema.virtual('fullName').get(() => `${this.firstName} ${this.lastName}`);

const User = mongoose.model('User', UserSchema);

module.exports = User;
