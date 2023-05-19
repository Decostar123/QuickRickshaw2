const mongoose = require("mongoose");

const USchema = new mongoose.Schema({
  uuid: { type: String, reuired: false },
  email: String,
  name: String,
  password: String,
  latitude: Number,
  longitude: Number,
  markAsAvailable: Boolean,
  feedback : {type:String , default:"" } 
});

const User = mongoose.model("User", USchema);
module.exports = User;
