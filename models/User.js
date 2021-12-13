const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please add a firstName"],
    maxlength: [50, "max 50 chars are allowed for the firstName"],
  },
  lastName: {
    type: String,
    required: [true, "Please add a lastName"],
    maxlength: [50, "max 50 chars are allowed for the lastName"],
  },
  age: {
    type: Number,
    max: 130,
  },
  hobbies: [
    {
      type: String,
      max: 150,
    },
  ],
});

// User => users
module.exports = mongoose.model("User", UserSchema);
