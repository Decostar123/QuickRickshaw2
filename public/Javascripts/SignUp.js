const Driver_Signup = "http://localhost:3000/driver/signup";
const User_Signup = "http://localhost:3000/user/signup";
const passenger = document.getElementById("passenger");
passenger.addEventListener("click", function () {
  const rickshaw = document.querySelector("#rickshawNo");
  rickshaw.style.display = "none";
  console.log(passenger.checked);
  console.log(driver.checked);
});
const driver = document.getElementById("driver");
// const passenger = document.getElementById("passenger");
driver.addEventListener("click", function () {
  const rickshaw = document.querySelector("#rickshawNo");
  rickshaw.style.display = "block";
});
// const check = driver.checked;
// console.log(" CHECHKED", check);
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const check = driver.checked;
  console.log(" CHECHKED", check);
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const phoneNo = document.querySelector("#phone").value;
  const rickshawNo =
    check === true ? document.querySelector("#rickshaw").value : "XYZ";
  console.log("$$$$", name, password, email, phoneNo, rickshawNo);
  // const a = name.value;

  const data = { name, password, email, phoneNo, rickshawNo };
  console.log("---", name);
  console.log(data);
  //   http://localhost:3000/driver/signup
  const SIGNUP_URL = check === true ? Driver_Signup : User_Signup;
  console.log("SIGBUPURL", SIGNUP_URL);
  const LOGIN_URL = "http://localhost:3000 ";

  fetch(SIGNUP_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("+++++", data.key);

      if (data.key) {
        console.log(" Got true ");
        window.open(LOGIN_URL);
      } else {
        console.log(" got false ");
        // window.open(LOGIN_URL);
        // window.location = LOGIN_URL;
        alert("User already Exist");
        // window.open(LOGIN_URL);
      }
      // else {
      //   console.log(" hi ");
      // }
    })
    .catch((err) => console.log(err));

  // const xhr = new XMLHttpRequest();
  // xhr.open("POST", SIGNUP_URL);
  // xhr.responseType = "json";
  // xhr.setRequestHeader("Content-Type", "application/json");

  // xhr.onload = (e) => {
  //   console.log(e);
  // };
  // xhr.withCredentials = true;
  // xhr.send(JSON.stringify(data));
});
