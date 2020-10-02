const bcrypt = require('bcrypt');

/**
 * Hashing plain text string using bcrypt with 20 round of salt.
 *@param {String} password - plain text password to be encrypted
 *
 * @returns {String} - a hashed password
 */
const encryptPassword = (password) => bcrypt.hash(password, 10);

/**
 *Compare previously hashed string with a plain text string
 *@param {String} hashedPassword - passworded that was previously hashed.
 *@param {String} plainPassword - password
 *
 * @returns {Boolean} - Boolean if password are the same or not.
 * */
const samePassord = (hashedPassword, plainPassword) => bcrypt.compare(plainPassword, hashedPassword);

module.exports = { encryptPassword, samePassord };
