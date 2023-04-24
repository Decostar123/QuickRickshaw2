const router = require("express").Router();
const driverList = require("../Driverdata");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
  res.json({ key: "Welcome user" });
  // res.render("driverDsdhboard")
});
let id = "02ddf53a-10b2-4c9b-94e7-3eea93c13594";
const User = require("../model/User");
router.post("/login", (req, res) => {
  console.log(" hi ");
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  User.findOne({ email, password })
    .then((data) => {
      if (data) {
        // console.log("looggedd in ", data);

        // res.redirect("/fetch");
        // getUsers({ lat: 4, long: 44 });
        // res.json(data);
        // res.redirect("/fetch");
        // SET THE LATITUDE AND LONGITUDE WHILE LOGIN
        id = data.uuid;
        res.json("Welcome buddy ! user ");
        // res.render("UserDashboard");
      } else {
        // res.json({success:false})
        res.json(data);
      }
    })
    .catch((err) => res.json(err));
});

router.post("/showDriverList", async (req, res) => {
  const entry = await User.findOne({ uuid: id });
  const latitude = entry.latitude;
  const longitude = entry.longitude;
  let result = driverList.filter((ele, ind) => {
    let a = ele.latitude;
    let b = ele.longitude;
    let dlati = a - latitude;
    let dlong = b - longitude;
    if (dlati * dlati + dlong * dlong <= 25 && ele.available) return true;
    return false;
  });
  res.json(result);
});
router.post("/signup", (req, res) => {
  console.log(" came in uesr signup ");
  const uuid = uuidv4();
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  console.log(email, password, name);
  //   const rickshawNo = req.body.rickshawNo;

  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  //   console.log(email, password);
  //   console.log(req.body);
  User.findOne({ email, password })
    .then((data) => {
      if (!data) {
        console.log(" No such data exist here ");
        const drv = new User({
          uuid,
          email,

          name,
          password,
          //   rickshawNo,
          latitude,
          longitude,
        });
        drv
          .save()
          .then((data) => {
            res.json("saved suucessfully ");
          })
          .catch((err) => res.json(err));
      } else {
        console.log("Alredy exist USER");
        res.json({ data });
      }
    })
    .catch((err) => res.json(err));
});

async function getUsers({ lat, long }) {
  console.log("in getUsers");
  let data = [];
  //   cDriver.find({}).then((val) => {
  //     console.log(val);
  //     data = val;
  //     console.log(data);
  //   });
  const res = await Driver.find({});

  console.log(res);
  //   console.log(user);
  //   const data = [];
  //   user.forEach((datas) => {
  //     console.log(datas);
  //   });
}
module.exports = router;
