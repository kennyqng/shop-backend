const router = require("express").Router();
const userAPI = require("./user/");

router.use("/api/user/", userAPI);

module.exports = router;
