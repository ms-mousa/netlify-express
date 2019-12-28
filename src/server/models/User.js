// import mongoose lib
const mongoose = require("mongoose");
const schema = mongoose.Schema;

// initiate the Schema for the user to make the model of later
const userSchema = new schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  dateJoined: {
    type: Date,
    default: new Date()
  }
});

// make a model of the Schema
const User = mongoose.model("User", userSchema);
// export the UserModel from the file
module.exports = User;
