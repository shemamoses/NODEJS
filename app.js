const express = require("express");

const app = express();

app.use("/product", (req, res, next) => {
  res.send("add product page");
});

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCT</button></form>'
  );
});

app.use("/", (req, res, next) => {
  res.send("home page");
});

app.listen(3000);
