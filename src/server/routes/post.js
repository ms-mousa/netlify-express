const express = require("express");
// init the router
const router = express.Router();

// import the user model
const Post = require("../models/Post");

// @route   GET api Users
// @desc    Get all the Users
// @access  Public
router.get("/post", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(users => res.json(users));
});

// @route   POST api user
// @desc    Create user
// @access  Public
router.post("/post", (req, res) => {
  Post.create({
    title: req.body.title,
    company: req.body.company,
    location: req.body.location,
    level: req.body.level,
    type: req.body.type,
    description: req.body.description,
    salary: req.body.salary,
    date: req.body.date
  }).then(user => res.json(user));
});

module.exports = router;
