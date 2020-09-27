const express = require("express");
const routes = require("./routes/");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(
    `${"*".repeat(50)} API Server is now listening on port ${PORT}.${"*".repeat(
      50
    )}`
  );
});
