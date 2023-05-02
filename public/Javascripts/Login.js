console.log(" this is the login js ");
const driverLogin = document.querySelector("#driverLogin");
// driverLogin.onClick = (e) => {
//   alert(" got clicked ");
// };
const SIGNUP_URL = "http://localhost:3000/driver/signup";
const LOGIN_URL = "http://localhost:3000/driver/login ";
const DASHBOARD_URL = "http://localhost:3000/driver/dDashBoard ";
driverLogin.addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const data = { name, password };

  console.log(data);
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
  //   alert(" got clicked ");
});
