const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

// create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get users by query
router.get("/users/:email", (req, res) => {
  //instead of find we can also use findOne, to get a single user
  // also we can use findById ...
  userSchema
    .find(req.params)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update user
router.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;

if (true) {
  if (false) {
    if (true) {
      if (true) {
      }
    }
  }
}
