const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const DriverRoute = require("./Driverdata");
const { v4: uuidv4 } = require("uuid");
// const Driver = require("./model/Driver");

mongoose
  .connect("mongodb://0.0.0.0:27017/quickDB")
  .then((resp) => console.log("connectin successful"))
  .catch((err) => console.log("got error", err));

require("dotenv").config();
const jwt = require("jsonwebtoken");
var cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    //  -- allowed methods ,
    // credentials : true
  })
);
app.use(cookieParser());
app.use(express.static("views"));
app.use(express.static("./public"));
// app.use(express.static("public/Stylesheets"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.set("trust proxy", true);

const Driver = require("./router/driver");

app.get("/", (req, res) => {
  // console.log(req.socket.remoteAddress);

  // console.log(req.ip);
  // const addr = req.socket.remoteAddress;
  // const url = `http://api.ipstack.com/${addr}?access_key=0cd820dc8f455a4265f4356279866354`;

  // axios
  //   .request(url)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log("galate h"));

  res.sendFile(__dirname + "/public/Login.html");
});
// app.use("/driver", verificationDriver, require("./router/driver"));
// app.post("/driver/signup", (req, res) => {
//   res.json("succeddfullly came ");
// });

// app.post("/driver/signup", async (req, res) => {
//   console.log(" Inside signup $$$$$$$$$$$$$$$$$$$$$$$$ ");
//   const uuid = uuidv4();
//   const email = req.body.email;
//   const password = req.body.password;
//   const name = req.body.name;
//   const rickshawNo = req.body.rickshawNo;
//   const phoneNo = req.body.phoneNo;
//   // const latitude = req.body.latitude;
//   // const longitude = req.body.longitude;
//   const latitude = 12;
//   const longitude = 12;

//   //   console.log(email, password);
//   //   console.log(req.body);
//   const data = await Driver.findOne({ email, password });
//   console.log(data);
//   if (!data) {
//     // const info = { email: email, password: password };
//     // const token = await jwt.sign({ info }, process.env.JWT_KEY, {
//     //   expiresIn: "345600s",
//     // });
//     // console.log( tokrn ) ;

//     // res.cookie("DRIVER_JWT_KEY", token);

//     const drv = new Driver({
//       uuid,
//       email,
//       password,
//       name,
//       rickshawNo,
//       phoneNo,
//       latitude,
//       longitude,
//     });
//     drv
//       .save()
//       .then((data) => {
//         console.log(" save successfully ");
//         res.json({ key: true });
//       })
//       .catch((err) => res.json({ key: false }));
//   } else {
//     res.json("User already exist ");
//   }
//   // .then((data) => {

//   //   if (!data) {
//   //           } else {
//   //     res.json({ data });
//   //   }
//   // })
//   // .catch((err) => res.json(err));
// });

app.use("/driver", Driver);
// app.use("/user", verificationUser, require("./router/user"));
// app.use("/", verification);

async function verificationDriver(req, res, next) {
  console.log(" cookie vejrificatoin ");
  // const token = req.cookies.DRIVER_JWT_KEY;
  try {
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvIjp7ImVtYWlsIjoieWFzaEBnbWFpbC5jb20iLCJwYXNzd29yZCI6Inlhc2gzIn0sImlhdCI6MTY4MjM5MTQxOSwiZXhwIjoxNjgyNzM3MDE5fQ.UVHLVV_-5FQXX0lp9EAGuhK0Gt1v6f9EZUGP45FXev0";
    const token = req.cookies.DRIVER_JWT_KEY;
    console.log(req.cookies);
    // if (!token) {
    //   res.redirect("/");
    //   return;
    // }
    const data = await jwt.verify(token, process.env.DRIVER_JWT_KEY);
    if (!data) {
      res.redirect("/");
      return;
    }
    next();
  } catch (err) {
    res.redirect("/");
    res.redirect();
  }

  // consolel.og("result of jwt ", data);
  // if (data) next();
  // else res.redirect("/");

  // console.log(req.body);
  // next();
}
async function verificationUser(req, res, next) {
  try {
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvIjp7ImVtYWlsIjoieWFzaEBnbWFpbC5jb20iLCJwYXNzd29yZCI6Inlhc2gzIn0sImlhdCI6MTY4MjM5MTQxOSwiZXhwIjoxNjgyNzM3MDE5fQ.UVHLVV_-5FQXX0lp9EAGuhK0Gt1v6f9EZUGP45FXev0";
    // const token = req.cookies.USER_JWT_KEY;
    const token = "---";
    console.log(req.cookies);
    // if (!token) {
    //   res.redirect("/");
    //   return;
    // }
    const data = await jwt.verify(token, process.env.USEER_JWT_KEY);
    if (!data) {
      res.redirect("/");
      return;
    } else {
      next();
    }
  } catch (err) {
    console.log(" I ahave forwarded ");
    res.redirect(307, "/router/driver/login");
  }
  // next();
}
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
