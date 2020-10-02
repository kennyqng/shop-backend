const router = require('express').Router();
const userAPI = require('./User');

router.use('/api/user/', userAPI);

module.exports = router;
