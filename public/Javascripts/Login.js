console.log(" this is the login js ");
const driverLogin = document.querySelector("#driverLogin");
const userLogin = document.querySelector("#userLogin");
const errorMessage=document.getElementById("errorMessage");
const error=document.getElementById("error");




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
          console.log(" switch the dashboard ");
          success.innerHTML="Loged In Successfully.";
          success.style.visibility="visible";
          setTimeout(()=>{
            success.style.visibility="hidden";
          } , 2000 ) ; 
          window.location.href = DASHBOARD_URL;
        } else {
          
          errorMessage.innerHTML="Invalid Usename or Password";
          error.style.visibility="visible";
          setTimeout(()=>{
            error.style.visibility="hidden";
      
          } , 2000 ) ; 
        }
      });
  } else {
    alert("Please allow loaction.");
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
          console.log(" switch the dashboard ");
          success.innerHTML="Loged In Successfully.";
          success.style.visibility="visible";
          setTimeout(()=>{
            success.style.visibility="hidden";
          } , 2000 ) ; 
          window.location.href = DASHBOARD_URL;
        } else {
          errorMessage.innerHTML="Invalid Usename or Password";
          error.style.visibility="visible";
          setTimeout(()=>{
            error.style.visibility="hidden";
      
          } , 2000 ) ; 
        }
      }).catch(e=>{
        alert("Some error occur.");
      });
  } else {
    alert("allow location access !!!! ");
  }

  //   alert(" got clicked ");
});
