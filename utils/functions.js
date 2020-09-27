const loggingMsg = (message, repeat) => {
  console.log(`${"*".repeat(repeat)} ${message} ${"*".repeat(repeat)}`);
};

module.exports = {
  loggingMsg,
};
