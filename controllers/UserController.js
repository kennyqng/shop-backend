const db = require('../models');

const registerUser = (firstName, lastName, password, email) => db.User.create({
  firstName,
  lastName,
  password,
  email
});

module.exports = {
  registerUser
};
