const loggingMsg = (message, repeat) => {
  console.log(`\n${'*'.repeat(repeat)} ${message} ${'*'.repeat(repeat)}\n`);
};

module.exports = {
  loggingMsg
};
