const mongoose = require('mongoose');
const { loggingMsg } = require('./functions');

const dbInit = () => {
  mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/shop_db',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      loggingMsg('MongoDB connected', 30);
    }
  );
};

module.exports = {
  dbInit
};
