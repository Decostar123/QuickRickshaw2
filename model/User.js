const mongoose = require("mongoose");

const USchema = new mongoose.Schema({
  uuid: { type: String, reuired: false },
  email: String,
  
  name: String,
  phoneNo : Number , 
  password: String,
  latitude: Number,
  longitude: Number,
  markAsAvailable: { type : Number , default:0 },
  feedback : {type:String , default:"" } 
});

const User = mongoose.model("User", USchema);
module.exports = User;
