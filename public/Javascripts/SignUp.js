const passenger = document.getElementById("passenger");
passenger.addEventListener("click", function () {
  const rickshaw = document.querySelector("#rickshawNo");
  rickshaw.style.display = "none";
});
const driver = document.getElementById("driver");
driver.addEventListener("click", function () {
  const rickshaw = document.querySelector("#rickshawNo");
  rickshaw.style.display = "block";
});

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const phoneNo = document.querySelector("#phone").value;
  const rickshawNo = document.querySelector("#rickshaw").value;
  console.log("$$$$", name, password, email, phoneNo, rickshawNo);
  // const a = name.value;

  const data = { name, password, email, phoneNo, rickshawNo };
  console.log("---", name);
  console.log(data);
  //   http://localhost:3000/driver/signup
  const SIGNUP_URL = "http://localhost:3000/driver/signup";
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
