const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("this is another middleware ");
  res.send("hello from express");
});

app.listen(3000);
