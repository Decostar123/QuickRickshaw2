console.log(" this is the login js ");
const driverLogin = document.querySelector("#driverLogin");
const userLogin = document.querySelector("#userLogin");
// driverLogin.onClick = (e) => {
//   alert(" got clicked ");
// };

let SIGNUP_URL = "http://localhost:3000/driver/signup";
let LOGIN_URL = "http://localhost:3000/driver/login ";
let DASHBOARD_URL = "http://localhost:3000/driver/dDashBoard ";
// let SIGNUP_URL = "https://quickrickshaws.onrender.com/driver/signup";
// let LOGIN_URL = "https://quickrickshaws.onrender.com/driver/login ";
// let DASHBOARD_URL = "https://quickrickshaws.onrender.com/driver/dDashBoard ";
driverLogin.addEventListener("click", () => {
  const resp = confirm(" allow access of location ");
  if (resp) {
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    const data = { name, password };

    console.log(data, "frontened");
    fetch(LOGIN_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("client", DASHBOARD_URL);
        if (data.key) {
          console.log(" shwinf the dashboard ");
          window.location.href = DASHBOARD_URL;
        } else {
          alert(" need to signup  ");
        }
      });
  } else {
    alert(" Please allowo loaction ");
  }

  //   alert(" got clicked ");
});

userLogin.addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const data = { name, password };

  // LOGIN_URL = "https://quickrickshaws.onrender.com/user/login ";
  // DASHBOARD_URL = "https://quickrickshaws.onrender.com/user/dDashBoard";
  LOGIN_URL = "http://localhost:3000/user/login ";
  DASHBOARD_URL = "http://localhost:3000/user/dDashBoard";
  console.log(data);
  console.log(DASHBOARD_URL, "fashboardurl ");
  const resp = confirm(" allow access of location ");
  if (resp) {
    fetch(LOGIN_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("client", DASHBOARD_URL);
        if (data.key) {
          console.log(" shwinf the dashboard ");
          window.location.href = DASHBOARD_URL;
        } else {
          alert(" need to signup  ");
        }
      });
  } else {
    alert("allow location acess !!!! ");
  }

  //   alert(" got clicked ");
});
