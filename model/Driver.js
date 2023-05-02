const mongoose = require("mongoose");
const DSchema = new mongoose.Schema({
  uuid: { type: String, reuired: false },
  email: String,
  name: String,
  password: String,
  rickshawNo: String,
  phoneNo: Number,
  latitude: Number,
  longitude: Number,
  markAsAvailable: Boolean,
});
const Driver = mongoose.model("Driver", DSchema);
module.exports = Driver;
