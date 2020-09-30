const router = require('express').Router();

const { UserController } = require('../../controllers');
const { loggingMsg } = require('../../utils');

const errorMsg = (errObj, variable) => ({
  msg: `${errObj.msg}${variable} is required.\n`,
  hasErr: true
});

router.post('*', async (req, res) => {
  loggingMsg('/api/user/register', 30);

  const {
    firstName, lastName, password, email
  } = req.body;
  let errorObj = { msg: '', hasErr: false };
  // Checking if required fields are present

  if (firstName === null || firstName.trim() === '') {
    errorObj = errorMsg(errorObj, 'First Name');
  }
  if (lastName === null || lastName.trim() === '') {
    errorObj = errorMsg(errorObj, 'Last Name');
  }
  if (password === null || lastName.trim() === '') {
    errorObj = errorMsg(errorObj, 'Password');
  }
  if (email === null || email.trim() === '') {
    errorObj = errorMsg(errorObj, 'Email');
  }
  if (errorObj.hasErr === true) {
    res.status(400).send(errorObj.msg);
  }
  try {
    await UserController.registerUser(firstName, lastName, password, email);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

module.exports = router;
