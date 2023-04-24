const mongoose = require("mongoose");

const USchema = new mongoose.Schema({
  uuid: { type: String, reuired: false },
  email: String,
  name: String,
  password: String,
  latitude: Number,
  longitude: Number,
  markAsAvailable: Boolean,
});

const User = mongoose.model("User", USchema);
module.exports = User;
