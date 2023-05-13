const Driver_Signup = "http://localhost:3000/driver/signup";
const User_Signup = "http://localhost:3000/user/signup";
// const Driver_Signup = "https://quickrickshaws.onrender.com/driver/signup";
// const User_Signup = "https://quickrickshaws.onrender.com/user/signup";
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
const otpbody=document.querySelector(".otpbody");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const check = driver.checked;
  console.log(" CHECHKED", check);
  const type = document.querySelector(".type").value;
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const phoneNo = document.querySelector("#phone").value;
  const error = document.querySelector("#error");
  const rickshawNo =
    check === true ? document.querySelector("#rickshaw").value : "XYZ";
  console.log("$$$$", name, password, email, phoneNo, rickshawNo);

    //Data Validation
    
    const nameregex=/^[a-zA-Z]*$/;
    const emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const mobilereg=/^\+91[1-9][0-9]{9}$/;
    const passreg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const rickshawreg=/^[A-Z]{2}[0-9]{2}[A-Z]{0,3}[1-9][0-9]{0,3}$/
    const passspec="password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    if(name.length==0){
      error.innerHTML="Name is Reqired field.";
      return;
    }
    else if(!nameregex.test(name)){
      error.innerHTML="Please enter valid name.";
      return;
    }
    else if(!emailreg.test(email)){

      error.innerHTML="Please enter valid email address.";
      return;
    }
    else if(!mobilereg.test(phoneNo)){
      error.innerHTML="Please enter valid mobile number.";
      return;  
    }
    else if(!passreg.test(password)){
      error.innerHTML="Please enter valid password.";
      error.innerHTML=error.innerHTML+"<br><p style='font-size:3vh;'>"+passspec+"</p>";
     return;
    }
    else if(check && !rickshawreg.test(rickshawNo)){
      error.innerHTML="Please enter valid rickshaw number.";
     
      return;
    }
  //Data Validation--------------------------------------
  const otpurl = "http://localhost:3000/getOtp";
  const verifyOtp = "http://localhost:3000/verifyOtp";
  // const phoneNo = document.querySelector("#phone").value;
  const data1 = { phoneNo: phoneNo };
  console.log("phone no is -- "+ phoneNo ) ; 
  const res1 = await fetch(otpurl, {
    method: "post",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(data1),
  });
  const resp1 = await res1.json();
  if (!resp1.key) {
    alert(" Some error occured ");
  }
  else{
    form.style.visibility="hidden";
    otpbody.style.visibility="visible";
  }
  // if (resp1.key) {
  //   // const verifyurl = "http://localhost:3000/verifyOtp" ;
  //   const otp = document.querySelector("#otp");
  //   const data2 = { otp: otp };
  //   const res2 = await fetch(verifyOtp, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "Application/json",
  //     },
  //     body: JSON.stringify(data2),
  //   });
  //   const resp2 = await res2.json();
  //   if (resp2.key) {
  //     // ---------

  //     const check = driver.checked;
  //     console.log(" CHECHKED", check);
  //     const name = document.querySelector("#name").value;
  //     const password = document.querySelector("#password").value;
  //     const email = document.querySelector("#email").value;
  //     const phoneNo = document.querySelector("#phone").value;
  //     const rickshawNo =
  //       check === true ? document.querySelector("#rickshaw").value : "XYZ";
  //     console.log("$$$$", name, password, email, phoneNo, rickshawNo);
  //     // const a = name.value;

  //     const data = { name, password, email, phoneNo, rickshawNo };
  //     console.log("---", name);
  //     console.log(data);
  //     //   http://localhost:3000/driver/signup
  //     const SIGNUP_URL = check === true ? Driver_Signup : User_Signup;
  //     console.log("SIGBUPURL", SIGNUP_URL);
  //     const LOGIN_URL = "http://localhost:3000 ";

  //     fetch(SIGNUP_URL, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("+++++", data.key);

  //         if (data.key) {
  //           console.log(" Got true ");
  //           window.open(LOGIN_URL);
  //         } else {
  //           console.log(" got false ");
  //           // window.open(LOGIN_URL);
  //           // window.location = LOGIN_URL;
  //           alert("User already Exist");
  //           // window.open(LOGIN_URL);
  //         }
  //         // else {
  //         //   console.log(" hi ");
  //         // }
  //       })
  //       .catch((err) => alert(" some error occured "));

  //     // ----------
  //   } else {
  //     alert("Plase Enter correct otp ");
  //   }
  // } else {
  //   alert(" SOme error occure ");
  // }
});
document.querySelector("#otpverify").addEventListener("click", async () => {
  const verifyOtp = "http://localhost:3000/verifyOtp";
  const otp = document.querySelector("#otp").value;
  console.log("otp value is ", otp);
  const data2 = { otp: otp };
  const res2 = await fetch(verifyOtp, {
    method: "post",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(data2),
  });
  const resp2 = await res2.json();
  console.log("-------", resp2.key);
  if (resp2.key === "approved") {
    //     // ---------
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
      .then((resp) => {
        console.log("+++++", resp.key);

        if (resp.key) {
          console.log(" Got true ");

          form.style.visibility="visibile";
          otpbody.style.visibility="hidden";
          window.open(LOGIN_URL);
        } else {
          console.log(" got false ");
          // window.open(LOGIN_URL);
          // window.location = LOGIN_URL;
          form.style.visibility="visible";
          otpbody.style.visibility="hidden";
          alert("User already Exist");
          window.open(LOGIN_URL);
        }
        return "ahhh";
      });
    // else {
    //   console.log(" hi ");
    // }
  } else {
    alert("Enter correct otp ");
  }
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const check = driver.checked;
//   console.log(" CHECHKED", check);
//   const name = document.querySelector("#name").value;
//   const password = document.querySelector("#password").value;
//   const email = document.querySelector("#email").value;
//   const phoneNo = document.querySelector("#phone").value;
//   const rickshawNo =
//     check === true ? document.querySelector("#rickshaw").value : "XYZ";
//   console.log("$$$$", name, password, email, phoneNo, rickshawNo);
//   // const a = name.value;

//   const data = { name, password, email, phoneNo, rickshawNo };
//   console.log("---", name);
//   console.log(data);
//   //   http://localhost:3000/driver/signup
//   const SIGNUP_URL = check === true ? Driver_Signup : User_Signup;
//   console.log("SIGBUPURL", SIGNUP_URL);
//   const LOGIN_URL = "http://localhost:3000 ";

//   fetch(SIGNUP_URL, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("+++++", data.key);

//       if (data.key) {
//         console.log(" Got true ");
//         window.open(LOGIN_URL);
//       } else {
//         console.log(" got false ");
//         // window.open(LOGIN_URL);
//         // window.location = LOGIN_URL;
//         alert("User already Exist");
//         // window.open(LOGIN_URL);
//       }
//       // else {
//       //   console.log(" hi ");
//       // }
//     })
//     .catch((err) => console.log(err));

//   // const xhr = new XMLHttpRequest();
//   // xhr.open("POST", SIGNUP_URL);
//   // xhr.responseType = "json";
//   // xhr.setRequestHeader("Content-Type", "application/json");

//   // xhr.onload = (e) => {
//   //   console.log(e);
//   // };
//   // xhr.withCredentials = true;
//   // xhr.send(JSON.stringify(data));
// });
