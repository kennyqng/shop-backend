const router = require("express").Router();
const { loggingMsg } = require("../../utils/");

router.post("*", (req, res) => {
  loggingMsg("/api/user/register", 30);

  res.send(false);
});

module.exports = router;
