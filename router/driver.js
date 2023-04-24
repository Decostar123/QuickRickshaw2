const router = require("express").Router();
const userList = require("../UserData");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
  res.json({ key: "Welcome driver" });
  // res.render("driverDsdhboard")
});
let id = "02ddf53a-10b2-4c9b-94e7-3eea93c13594";
const Driver = require("../model/Driver");
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  Driver.findOne({ email, password })
    .then((data) => {
      if (data) {
        // console.log("looggedd in ", data);

        // res.redirect("/fetch");
        // getUsers({ lat: 4, long: 44 });
        // res.json(data);
        // res.redirect("/fetch");
        // SET THE LATITUDE AND LONGITUDE WHILE LOGIN
        id = data.uuid;
        res.render("DriverDashboard");
      } else {
        // res.json({success:false})
        res.json(data);
      }
    })
    .catch((err) => res.json(err));
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
router.post("/signup", (req, res) => {
  const uuid = uuidv4();
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const rickshawNo = req.body.rickshawNo;

  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  //   console.log(email, password);
  //   console.log(req.body);
  Driver.findOne({ email, password })
    .then((data) => {
      if (!data) {
        const drv = new Driver({
          uuid,
          email,
          password,
          name,
          rickshawNo,
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
