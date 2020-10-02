const router = require('express').Router();

const { UserController } = require('../../controllers');
const {
  /* loggingMsg, */ encryptPassword,
  isValidParam
} = require('../../utils');

const errorMsg = (errObj, variable) => ({
  // No space b/c new line from previous time.
  msg: `${errObj.msg}${variable} is required.\n`,
  hasErr: true
});

/**
 * @name post/api/user/register
 * @param {Object} req - express request object.
 * @param {String} req.body.firstName - first name of new user.
 * @param {String} req.body.lastName - last name of new user.
 * @param {String} req.body.email - email of new user.
 * @param {String} req.body.password - plain text password.
 * @param {Object} res - express respond object.
 * */
router.post('*', async (req, res) => {
  // loggingMsg('/api/user/register', 30);
  const {
    firstName, lastName, password, email
  } = req.body;
  let errorObj = { msg: '', hasErr: false };
  // Checking if required fields are present

  if (!isValidParam(firstName)) {
    errorObj = { ...errorMsg(errorObj, 'First Name') };
  }
  if (!isValidParam(lastName)) {
    errorObj = { ...errorMsg(errorObj, 'Last Name') };
  }
  if (!isValidParam(password)) {
    errorObj = { ...errorMsg(errorObj, 'Password') };
  }
  if (!isValidParam(email)) {
    errorObj = { ...errorMsg(errorObj, 'Email') };
  }
  if (errorObj.hasErr === true) {
    return res.status(400).json({ msg: errorObj.msg });
  }

  try {
    const hashedPassword = await encryptPassword(password);
    await UserController.registerUser(
      firstName,
      lastName,
      hashedPassword,
      email
    );
    return res.status(200).json({ msg: 'User added' });
  } catch (err) {
    console.log(err);
    return res.status(400).send();
  }
});

module.exports = router;
