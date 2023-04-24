const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require("axios");
mongoose
  .connect("mongodb://0.0.0.0:27017/quickDB")
  .then((resp) => console.log("connectin successful"))
  .catch((err) => console.log("got error", err));

app.use(express.static("views"));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("trust proxy", true);

const Driver = require("./model/Driver");

app.get("/", (req, res) => {
  // console.log(req.socket.remoteAddress);

  // console.log(req.ip);
  // const addr = req.socket.remoteAddress;
  // const url = `http://api.ipstack.com/${addr}?access_key=0cd820dc8f455a4265f4356279866354`;

  // axios
  //   .request(url)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log("galate h"));

  res.send("hi");
});
app.use("/driver", require("./router/driver"));
app.use("/user", require("./router/user"));

// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix",
//   params: {
//     origins:
//       "40.629041,-74.025606;40.630099,-73.993521;40.644895,-74.013818;40.627177,-73.980853",
//     destinations:
//       "40.629041,-74.025606;40.630099,-73.993521;40.644895,-74.013818;40.627177,-73.980853",
//   },
//   headers: {
//     "X-RapidAPI-Key": "3c0a80b1afmshc097ec0e37f3a6dp178341jsn721724762d78",
//     "X-RapidAPI-Host": "trueway-matrix.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://trueway-geocoding.p.rapidapi.com/ReverseGeocode",
//   params: { location: "37.7879493,-122.3961974", language: "en" },
//   headers: {
//     "X-RapidAPI-Key": "3c0a80b1afmshc097ec0e37f3a6dp178341jsn721724762d78",
//     "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data.results[0].location);
//     console.log(response.data.results[0].location.lat);
//     console.log(response.data.results[0].location.lng);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// const url =
//   "http://api.ipstack.com/127.0.0.1?access_key=0cd820dc8f455a4265f4356279866354";
// axios.request(url).then((res) => console.log(res.data));
app.listen(3000, () => console.log("server started "));
