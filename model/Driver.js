const mongoose = require("mongoose");
const DSchema = new mongoose.Schema({
  uuid: { type: String, required: false },
  email: String,
  name: String,
  password: String,
  rickshawNo: String,
  phoneNo: Number,
  latitude: Number,
  longitude: Number,
  markAsAvailable: { type : Number , default:0 } ,
  feedback : {type:String , default:"" } 
});
const Driver = mongoose.model("Driver", DSchema);
module.exports = Driver;
