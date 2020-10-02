const password = require('./password');
const functions = require('./functions');
const db = require('./DB');

module.exports = {
  ...functions,
  ...db,
  ...password
};
