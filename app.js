const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  res.send("add product page");
});
app.use("/", (req, res, next) => {
  res.send("home page");
});

app.listen(3000);
