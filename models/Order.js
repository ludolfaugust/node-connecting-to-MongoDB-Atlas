const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema({
  kind: {
    type: String,
    required: [true, "Please add a kind"],
    maxlength: [50, "max 50 chars are allowed for the kind"],
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [50, "max 50 chars are allowed for the name"],
  },
  pieces: {
    type: Number,
    max: 1130,
  },
});

// Order => Orders
module.exports = mongoose.model("Order", OrderSchema);
