const express = require("express");
// init the router
const router = express.Router();

// import the user model
const User = require("../models/User");

// @route   GET api Users
// @desc    Get all the Users
// @access  Public
router.get("/user", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users));
});

// @route   POST api user
// @desc    Create user
// @access  Public
router.post("/user", (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }).then(user => res.json(user));
});

module.exports = router;
