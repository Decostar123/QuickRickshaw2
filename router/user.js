const router = require("express").Router();
// const driverList = require("../Driverdata");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const jwt = require("jsonwebtoken");
// const User = require("../model/User");
const path = require("path");
let pname = "" ,
  ppassword = "";
let longitude = 0;
let latitude = 0;

router.get("/", (req, res) => {
  res.json({ key: "Welcome user" });
  // res.render("driverDsdhboard")
});
router.get("/dDashBoard", async (req, res) => {
  const token = req.cookies.USER_JWT_KEY;
  const data = await jwt.verify(token, process.env.USER_JWT_KEY);
  pname = data.info.pname;
  ppassword = data.info.ppassword;

  const entry = await User.findOne({ name: pname, password: ppassword });
  // const IPAddress = "157.32.4.237";
  const IPAddress = req.ip ;
  const url = "http://ip-api.com/json/" + IPAddress;
  const resp = await fetch(url);
  const location = await resp.json();
  entry.longitude = location.lon;
  entry.latitude = location.lat;
  longitude = location.lon;
  latitude = location.lat;
  console.log("(((", entry);

  console.log("ppname", pname, "ppasswird", ppassword);
  const temp = path.resolve(__dirname, "..");
  // console.log(temp);
  console.log("*****", temp);
  // console.log(req.query.valid);
  // res.json({ dashboard: "dashboard" });
  console.log(temp + "/public/Passenger_Dashboard.html");
  res.sendFile(temp + "/public/Passenger_Dashboard.html");
});

router.post("/feedback" , async ( req , res )=>{
  const data = req.body.feedback ; 
  
  
  const entry = await User.findOne({ name: pname, password: ppassword });
  console.log(" the entry was " ,  entry ) ; 
  if( !entry )
  {
    res.json({ "key" : false }) ; 
  }else{
    entry.feedback = data ; 
    console.log( entry )  ; 
    res.json({"key" : true }) ; 
  }

  
  
})
let id = "02ddf53a-10b2-4c9b-94e7-3eea93c13594";
const User = require("../model/User");
const Driver = require("../model/Driver");
router.post("/login", async (req, res) => {
  // console.log(req.cookies);
  const name = req.body.name;
  const password = req.body.password;
  pname = name;
  ppassword = password;
  // dname = name;
  // dpassword = password;
  console.log(name, password);
  const data = await User.findOne({ name, password });
  console.log(data);
  if (data) {
    // const info = { email: email, password: password };
    // const token = await jwt.sign({ info }, process.env.JWT_KEY, {
    //   expiresIn: "345600s",
    // });
    // console.log( tokrn ) ;
    // res.cookie("DRIVER_JWT_KEY", token);
    // const info = { email: email, password: password };

    const IPAddress = req.ip ;
    const url = "http://ip-api.com/json/" + IPAddress;
    const resp = await fetch(url);
    const location = await resp.json();
    data.longitude = location.lon;
    data.latitude = location.lat;
    longitude = location.lon;
    latitude = location.lat;
    // console.log(data);
    const info = { pname: pname, ppassword: ppassword };
    const token =  jwt.sign({ info }, process.env.USER_JWT_KEY, {
      expiresIn: "172800s",
    });
    console.log(token);

    res.cookie("USER_JWT_KEY", token);

    res.json({ key: true });
  } else {


    res.json({ key: false });
  }
  // .then((data) => {
  //   if (data) {
  //     // console.log("looggedd in ", data);

  //     // res.redirect("/fetch");
  //     // getUsers({ lat: 4, long: 44 });
  //     // res.json(data);
  //     // res.redirect("/fetch");
  //     // SET THE LATITUDE AND LONGITUDE WHILE LOGIN
  //     id = data.uuid;

  //     // res.render("DriverDashboard");
  //   } else {
  //     // res.json({success:false})
  //     res.json(data);
  //   }
  // })
  // .catch((err) => res.json(err));
});

// router.post("/showDriverList", async (req, res) => {
//   const entry = await User.findOne({ uuid: id });
//   const latitude = entry.latitude;
//   const longitude = entry.longitude;
//   let result = driverList.filter((ele, ind) => {
//     let a = ele.latitude;
//     let b = ele.longitude;
//     let dlati = a - latitude;
//     let dlong = b - longitude;
//     if (dlati * dlati + dlong * dlong <= 25 && ele.available) return true;
//     return false;
//   });
//   res.json(result);
// });

router.post("/userExist" , async (req, res) =>{
  const email = req.body.email;
  console.log("email --  > " , email ) ; 
  const data = await User.findOne({ email }); 
  console.log("---> " , data ) ; 
  if( data )
  {
    console.log(" I got the dsta ")
    res.json({key : true }) ; 
  }else{
    res.json({key: false }) ; 
  }
})
router.get("/driverList", (req, res) => {
  const temp = path.resolve(__dirname, "..");
  console.log(temp);
  res.sendFile(temp + "/public/Driver_list.html");
  // res.json({ passenger_list: " Pssenger_list " });
});

router.get("/PAvailable", async (req, res) => {
  const data = await User.findOne({ name: pname, password: ppassword });
  console.log("available", data);
  if (data) {
    data.markAsAvailable = true;
    res.json({ key: true });
  } else {
    res.json({ key: false });
  }
});

router.post("/signup", async (req, res) => {
  console.log(" Inside signup $$$$$$$$$$$$$$$$$$$$$$$$ ");

  const uuid = uuidv4();
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  // const rickshawNo = req.body.rickshawNo;
  const phoneNo = req.body.phoneNo;
  // const latitude = req.body.latitude;
  // const longitude = req.body.longitude;
  const latitude = 12;
  const longitude = 12;
  console.log("name", name);
  console.log(uuid, email, password, name, phoneNo);
  // res.json({ key: true });

  //   //   console.log(email, password);
  //   //   console.log(req.body);
  const data = await User.findOne({ email  });
  if (!data) {
    // const info = { email: email, password: password };
    // const token = await jwt.sign({ info }, process.env.JWT_KEY, {
    //   expiresIn: "345600s",
    // });
    // console.log( tokrn ) ;

    // res.cookie("DRIVER_JWT_KEY", token);

    // const info = { pname: name, ppassword: password };
    // const token = await jwt.sign({ info }, process.env.USER_JWT_KEY, {
    //   expiresIn: "172800s",
    // });
    // console.log(token);

    // res.cookie("USER_JWT_KEY", token);

    const drv = new User({
      uuid,
      email,
      password,
      name,
      // rickshawNo,
      phoneNo,
      latitude,
      longitude,
    });
    drv
      .save()
      .then((data) => {
        console.log(" save successfully ");
        res.json({ key: true });
      })
      .catch((err) => res.json({ key: false }));
  } else {
    res.json({ key: false });
  }
  // .then((data) => {

  //   if (!data) {
  //           } else {
  //     res.json({ data });
  //   }
  // })
  // .catch((err) => res.json(err));
});

router.get("/PNotAvailable", async (req, res) => {
  const data = await User.findOne({ name: pname, password: ppassword });
  console.log("available", data);
  if (data) {
    data.markAsAvailable = false;
    res.json({ key: true });
  } else {
    res.json({ key: false });
  }
});

router.get("/drivers", async (req, res) => {
  let result = await Driver.find({ markAsAvailable: true });
  result = result.filter((ele) => {
    const lat = ele.latitude;
    const lon = ele.longitude;
    const distance = measure(latitude, longitude, lat, lon);
    return distance <= 100000;
  });
  console.log(result);
  res.json({ result: result });
});
function measure(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d*1000 ;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
module.exports = router;
