const mongoose = require('mongoose');
const { loggingMsg } = require('./functions');

const dbInit = () => {
  const autoIndex = process.env.PRODUCTION !== 'false';
  mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/shop_db',
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex },
    () => {
      loggingMsg('MongoDB connected', 30);
    }
  );
};

module.exports = {
  dbInit
};
