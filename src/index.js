const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use("/api", userRoutes);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.post("/", (req, res) => {
  res.send("Got post");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to mongodb"))
  .catch((error) => console.error("Error", error));

app.listen(port, () => console.log("server listening on port", port));

// app tests
const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);

// TODO: Test TODO
// FIXME: Test FIXME
