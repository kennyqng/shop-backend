const loggingMsg = (message, repeat) => {
  console.log(`\n${'*'.repeat(repeat)} ${message} ${'*'.repeat(repeat)}\n`);
};

const isValidParam = (variable) => {
  if (variable === null || variable === undefined) {
    return false;
  }
  if (variable.trim() === '') {
    return false;
  }

  return true;
};
module.exports = {
  loggingMsg,
  isValidParam
};
