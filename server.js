const express = require('express');
const routes = require('./routes');
const { dbInit } = require('./utils');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
// Connect to base();
dbInit();

app.listen(PORT, () => {
  console.log(
    `\n${'*'.repeat(
      30
    )} API Server is now listening on port ${PORT}.${'*'.repeat(30)}\n`
  );
});
