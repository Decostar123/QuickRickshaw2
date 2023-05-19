const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const DriverRoute = require("./Driverdata");
const { v4: uuidv4 } = require("uuid");
const url = require("url");
// const Driver = require("./model/Driver");
require("dotenv").config();
const CONNECTION_URL =
  "mongodb+srv://gecbhavce2021:HmPVZ4RGB3YLVFLQ@rickshawdb.j9axcwl.mongodb.net/rickshawDB";
mongoose
  .connect(CONNECTION_URL)
  .then((resp) => console.log("connectin successful"))
  .catch((err) => console.log("got error", err));

// const accountSid = "AC6311c17ca87cf589def81f6e2d98b7c5";
// const authToken = "3286ab26c1978952e7954497e56b8c2d";
// const verifySid = "VAf2a22fc41ace06f1d255e250ff25e512";
// const client = require("twilio")(accountSid, authToken);

// const accountSid = "AC6311c17ca87cf589def81f6e2d98b7c5";
// const authToken = "3e17ba4da88f28a679fecc1196e2f850";
// const verifySid = "VAf2a22fc41ace06f1d255e250ff25e512";

const accountSid = "AC6311c17ca87cf589def81f6e2d98b7c5";
const authToken = "6bd0eed1de20b59985153db3b7ea3b20";
const verifySid = "VA84c22cc0a20f20e88b0e6301fa29dbdc";
const client = require("twilio")(accountSid, authToken);

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
app.set("trust proxy", true);
app.use(cookieParser());
app.use(express.static("views"));
app.use(express.static("./public"));
// app.use(express.static("public/Stylesheets"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.set("trust proxy", true);

const Driver = require("./router/driver");
const User = require("./router/user");

app.get("/", async (req, res) => {
  // console.log("iiipppp", req.ip);
  // console.log(req.socket.remoteAddress);

  // console.log(req.ip);
  // const addr = req.socket.remoteAddress;
  // const url = `http://api.ipstack.com/${addr}?access_key=0cd820dc8f455a4265f4356279866354`;

  // axios
  //   .request(url)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log("galate h"));

  const token1 = req.cookies.USER_JWT_KEY;
  const token2 = req.cookies.DRIVER_JWT_KEY;
  console.log( token1 , "tokens////" , token2 ) ; 
  if (token1) {
    const data = await jwt.verify(token1, process.env.USER_JWT_KEY);
    if (data) {
      // console.log(data);
      // const string = `${data.info.pname},${data.info.ppassword}`;

      res.redirect("/user/dDashBoard");

      // res.redirect(url.format({
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   pathname: '/some/path',
      //   query: {
      //     page: 1,
      //     format: 'json'
      //   }
      // }));
    } else {
      res.sendFile(__dirname + "/public/Login.html");
    }
  } else if (token2) {
    const data = await jwt.verify(token2, process.env.DRIVER_JWT_KEY);
    if (data) {
      // console.log(data);
      // const string = `${data.info.pname},${data.info.ppassword}`;

      res.redirect("/driver/dDashBoard");

      // res.redirect(url.format({
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   pathname: '/some/path',
      //   query: {
      //     page: 1,
      //     format: 'json'
      //   }
      // }));
    } else {
      res.sendFile(__dirname + "/public/Login.html");
    }
  } else {

    res.sendFile(__dirname + "/public/Login.html");
  }
});
// app.use("/driver", verificationDriver, require("./router/driver"));
// app.post("/driver/signup", (req, res) => {
//   res.json("succeddfullly came ");
// });
let phoneNo = "";
app.post("/getOtp", (req, res) => {
  console.log("otp sended");
  phoneNo = req.body.phoneNo;
  console.log( "server phoneNo id " , phoneNo ) ; 
  client.verify.v2
    .services(verifySid)
    .verifications.create({ to: `${phoneNo}`, channel: "sms" })
    .then((verification) => console.log(verification.status))
    .then(() => res.json({ key: true }))
    .catch((e) => {
        console.log( e ) ; 
      res.json({ key: false }) } );
});

// app.post("/verifyOtp", (req, res) => {
//   client.verify.v2
//     .services(verifySid)
//     .verifications.create({ to: "+919512849059", channel: "sms" })
//     .then((verification) => console.log(verification.status))
//     .then(() => res.json({ key: true }))
//     .catch(() => res.json({ key: false }));
// });
app.post("/verifyOtp", async (req, res) => {
  console.log("otp veriying ");
  let otp = req.body.otp;
  console.log(req.body.otp);
  // client.verify.v2
  //   .services(verifySid)
  //   .verifications.create({ to: "+917041019298", channel: "sms" })
  //   .then((verification) => {
  //     data = verification.status;
  //   })
  //   .then(() => res.json({ key: data }));

  let data = "";
  client.verify.v2
    .services(verifySid)
    .verificationChecks.create({ to: `${phoneNo}`, code: otp })
    .then((verification_check) => (data = verification_check.status))
    .then(() => res.json({ key: data }))
    .catch(() => res.json({ key: false }));

  // client.verify.v2
  //   .services(verifySid)
  //   .verifications.create({ to: "+917041019298", channel: "sms" })
  //   .then((verification) => console.log(verification.status));
});
app.get("/logout"  , ( req , res )=>{
  res.clearCookie('DRIVER_JWT_KEY') ; 
  res.clearCookie('USER_JWT_KEY') ;

  // res.redirect("/") ;
  const token1 = req.cookies.USER_JWT_KEY;
  const token2 = req.cookies.DRIVER_JWT_KEY;
  console.log( token1 , "tokens-----" , token2 ) ;
  // console.log( req.cookies.DRIVER_JWT_KEY ) ; 
  // console.log( req.cookies.USER_JWT_KEY ) ; 
  // res.redirect("/") ;
  res.json({"key" : true }) ;  
})
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

app.use("/driver", verificationDriver, Driver);
app.use("/user", verificationUser, User);

// app.use("/user", verificationUser, require("./router/user"));
// app.use("/", verification);

async function verificationDriver(req, res, next) {
  console.log(" Verifying jswn web token ");
  const url = "" + req.originalUrl;
  const array = url.split("/");
  console.log("9999999", array[array.length - 1]);
  if (
    array[array.length - 1] === "login" ||
    array[array.length - 1] === "signup" || 
    array[array.length - 1] === "driverExist" ||
    array[array.length - 1] === "feedback"
  ) {
    console.log("direct acess via signu[p");
    next();
  } else {
    console.log("88888888888", array[array.length - 1]);
    const token = req.cookies.DRIVER_JWT_KEY;
    if (!token) {
      res.redirect("/");
      return;
    }
    const data = await jwt.verify(token, process.env.DRIVER_JWT_KEY);
    if (!data) {
      res.redirect("/");
      // return;
    } else {
      next();
    }
  }
  // console.log(req.originalUrl);
  // next();
}

async function verificationUser(req, res, next) {
  console.log(" Verifying jswn web token ");
  const url = "" + req.originalUrl;
  const array = url.split("/");
  console.log("9999999", array[array.length - 1]);
  if (
    array[array.length - 1] === "login" ||
    array[array.length - 1] === "signup" || 
    array[array.length - 1] === "userExist" ||
    array[array.length - 1] === "feedback"
  ) {
    console.log("diet signing up her ");
    next();
  } else {
    console.log("88888888888", array[array.length - 1]);
    const token = req.cookies.USER_JWT_KEY;
    if (!token) {
      res.redirect("/");
      return;
    }
    const data = await jwt.verify(token, process.env.USER_JWT_KEY);
    if (!data) {
      res.redirect("/");
      // return;
    } else {
      next();
    }
  }
  // console.log(req.originalUrl);
  // next();
}

// async function verificationDriver(req, res, next) {
//   console.log(" cookie vejrificatoin ");
//   // const token = req.cookies.DRIVER_JWT_KEY;
//   try {
//     // const token =
//     //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvIjp7ImVtYWlsIjoieWFzaEBnbWFpbC5jb20iLCJwYXNzd29yZCI6Inlhc2gzIn0sImlhdCI6MTY4MjM5MTQxOSwiZXhwIjoxNjgyNzM3MDE5fQ.UVHLVV_-5FQXX0lp9EAGuhK0Gt1v6f9EZUGP45FXev0";
//     const token = req.cookies.DRIVER_JWT_KEY;
//     console.log(req.cookies);
//     // if (!token) {
//     //   res.redirect("/");
//     //   return;
//     // }
//     const data = await jwt.verify(token, process.env.DRIVER_JWT_KEY);
//     if (!data) {
//       res.redirect("/");
//       return;
//     }
//     next();
//   } catch (err) {
//     res.redirect("/");
//     // res.redirect();
//   }

//   // consolel.og("result of jwt ", data);
//   // if (data) next();
//   // else res.redirect("/");

//   // console.log(req.body);
//   // next();
// }
// async function verificationUser(req, res, next) {
//   try {
//     // const token =
//     //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvIjp7ImVtYWlsIjoieWFzaEBnbWFpbC5jb20iLCJwYXNzd29yZCI6Inlhc2gzIn0sImlhdCI6MTY4MjM5MTQxOSwiZXhwIjoxNjgyNzM3MDE5fQ.UVHLVV_-5FQXX0lp9EAGuhK0Gt1v6f9EZUGP45FXev0";
//     // const token = req.cookies.USER_JWT_KEY;
//     const token = "---";
//     console.log(req.cookies);
//     // if (!token) {
//     //   res.redirect("/");
//     //   return;
//     // }
//     const data = await jwt.verify(token, process.env.USEER_JWT_KEY);
//     if (!data) {
//       res.redirect("/");
//       return;
//     } else {
//       next();
//     }
//   } catch (err) {
//     console.log(" I ahave forwarded ");
//     res.redirect(307, "/router/driver/login");
//   }
//   // next();
// }
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
