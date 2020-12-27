const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/example", (req, res) => {
  res.send("hitting example routes");
});

app.get("/example/:name/:age", (req, res) => {
  console.log(req.params);
  res.send("example with route params");
});

app.listen("3000");
