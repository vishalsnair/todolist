const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const { itemrouter } = require("./lists/lists.routes");

app.use("/items", itemrouter);

const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.send(err);
};

const routeNotExist = (req, res, next) => {
  res.send(`${req.path} does not exist`);
};
// app.get('/*',routeNotExist)

app.use(morgan("dev"));
app.use(errorHandler);
app.use(routeNotExist);

module.exports = app;
