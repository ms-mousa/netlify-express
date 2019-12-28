// import mongoose lib
const mongoose = require("mongoose");
const schema = mongoose.Schema;

// initiate the Schema for the post to make the model of later
const postSchema = new schema({
  title: {
    type: String
  },
  company: {
    type: String
  },
  location: {
    type: String
  },
  level: {
    type: String
  },
  type: {
    type: String
  },
  description: {
    type: String
  },
  salary: {
    type: Number
  },
  date: {
    type: Date,
    default: new Date()
  }
});

// make a model of the Schema
const Post = mongoose.model("Post", postSchema);
// export the UserModel from the file
module.exports = Post;
