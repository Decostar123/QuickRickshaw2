// const express = require("express");
// const app = express() ;
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());
const path = require("path");
const router = require("express").Router();
const userList = require("../UserData");
const { v4: uuidv4 } = require("uuid");
router.get("/", (req, res) => {
  res.send("hi");
});
let dname = "";
let dpassword = "";
router.post("/", (req, res) => {
  console.log(" ************************ ");
  console.log(req.body);
  res.json({ key: "Welcome driver" });
  // res.render("driverDsdhboard")
});
let id = "02ddf53a-10b2-4c9b-94e7-3eea93c13594";
const Driver = require("../model/Driver");
const User = require("../model/User");
router.get("/login", (req, res) => {
  // res.sendFile(__dirname + "") ;
  console.log(__dirname);
  // let path = __
  // console.log(process.cwd);
  // const hh = path.resolve(__dirname, "/../");
  // console.log("HH", hh);
  // res.json("hi-----");
  const temp = path.resolve(__dirname, "..");
  console.log(temp);
  res.sendFile(temp + "/public/Login.html");
  // res.json({ temp });

  // res.sendFile(__dirname + "/../public/Login.html");
});
router.get("/dDashBoard", async (req, res) => {
  const temp = path.resolve(__dirname, "..");
  // console.log(temp);
  console.log("*****", temp);
  // res.json({ dashboard: "dashboard" });
  console.log(temp + "/public/Driver_Dashboard.html");
  res.sendFile(temp + "/public/Driver_Dashboard.html");
});
router.post("/login", async (req, res) => {
  // console.log(req.cookies);
  const name = req.body.name;
  const password = req.body.password;
  dname = name;
  dpassword = password;
  console.log(name, password, "%%%%%");
  const data = await Driver.findOne({ name, password });
  console.log("****", data);
  if (data) {
    // const info = { email: email, password: password };
    // const token = await jwt.sign({ info }, process.env.JWT_KEY, {
    //   expiresIn: "345600s",
    // });
    // console.log( tokrn ) ;
    // res.cookie("DRIVER_JWT_KEY", token);
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

router.post("/showUserList", async (req, res) => {
  const entry = await Driver.findOne({ uuid: id });
  const latitude = entry.latitude;
  const longitude = entry.longitude;
  let result = userList.filter((ele, ind) => {
    let a = ele.latitude;
    let b = ele.longitude;
    let dlati = a - latitude;
    let dlong = b - longitude;
    if (dlati * dlati + dlong * dlong <= 25 && ele.available) return true;
    return false;
  });
  res.json(result);
});

router.get("/passengerList", (req, res) => {
  const temp = path.resolve(__dirname, "..");
  console.log(temp);
  res.sendFile(temp + "/public/Passenger_list.html");
  // res.json({ passenger_list: " Pssenger_list " });
});
router.get("/DAvailable", async (req, res) => {
  const data = await Driver.findOne({ name: dname, password: dpassword });
  console.log("available", data);
  if (data) {
    data.markAsAvailable = true;
    res.json({ key: true });
  } else {
    res.json({ key: false });
  }
});

router.get("/DNotAvailable", async (req, res) => {
  const data = await Driver.findOne({ name: dname, password: dpassword });
  console.log("available", data);
  if (data) {
    data.markAsAvailable = false;
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
  const rickshawNo = req.body.rickshawNo;
  const phoneNo = req.body.phoneNo;
  // const latitude = req.body.latitude;
  // const longitude = req.body.longitude;
  const latitude = 12;
  const longitude = 12;
  console.log("name", name);
  console.log(uuid, email, password, name, rickshawNo, phoneNo);
  // res.json({ key: true });

  //   //   console.log(email, password);
  //   //   console.log(req.body);
  const data = await Driver.findOne({ email, password });
  if (!data) {
    // const info = { email: email, password: password };
    // const token = await jwt.sign({ info }, process.env.JWT_KEY, {
    //   expiresIn: "345600s",
    // });
    // console.log( tokrn ) ;

    // res.cookie("DRIVER_JWT_KEY", token);

    const drv = new Driver({
      uuid,
      email,
      password,
      name,
      rickshawNo,
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

router.get("/passengers", async (req, res) => {
  const result = User.find({ markAsAvailable: true });
  console.log(result);
});

// async function getUsers({ lat, long }) {
//   console.log("in getUsers");
//   let data = [];
//   //   cDriver.find({}).then((val) => {
//   //     console.log(val);
//   //     data = val;
//   //     console.log(data);
//   //   });
//   const res = await Driver.find({});

//   console.log(res);
//   console.log(user);
//   const data = [];
//   user.forEach((datas) => {
//     console.log(datas);
//   });
// });
module.exports = router;
