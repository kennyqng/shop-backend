const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, require: [true, 'First Name is required.'] },
  lastName: { type: String, require: [true, 'Last Name is required.'] },
  password: { type: String, require: [true, 'Password is required'] },
  email: {
    type: String,
    index: true,
    // Create unique index to prevent duplication of email.
    unique: true,
    require: [true, 'Password is required'],
    validate: {
      // only validate for mat of _@_._ .  Will have to implement email confirmation to
      // actually validate if it is a correct email
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: 'Email is not in the right format.'
    }
  }
  /*  address: {
    number: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String }
} */
});

UserSchema.virtual('fullName').get(() => `${this.firstName} ${this.lastName}`);

const User = mongoose.model('User', UserSchema);

module.exports = User;
