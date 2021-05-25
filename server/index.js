const express = require("express");
const app = express();
const dotenv = require("dotenv");
var cors = require("cors");

const bodyParser = require("body-parser");
dotenv.config({ path: "./../.env" });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./api/router"); //importing route

routes(app);
app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.status(404).send({ url: req.originalUrl + " not found" });
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(5001);
console.log("RESTful API server started on: " + 5001);
