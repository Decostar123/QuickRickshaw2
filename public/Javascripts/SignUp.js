const Driver_Signup = "http://localhost:3000/driver/signup";
const User_Signup = "http://localhost:3000/user/signup";
// const Driver_Signup = "https://quickrickshaws.onrender.com/driver/signup";
// const User_Signup = "https://quickrickshaws.onrender.com/user/signup";
const name1 = document.querySelector("#name");
const email1 = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const rickshaw=document.querySelector("#rickshaw");
const driver = document.getElementById("driver");
const otpbox= document.getElementById("otpbox");
const spanotp=document.getElementById("spanotp");
const errorMessage=document.getElementById("errorMessage");
const title1=document.getElementById("title1");
const error1=document.getElementById("error1");
const success=document.getElementById("success");

const nameclass=name1.classList;
const emailclass=email1.classList;
const phoneclass=phone.classList;
const passclass=password.classList;
const rickclass=rickshaw.classList;
const content=document.getElementById("content");  //signup page

const resendOTP = document.getElementById("resendOTP") ; 
resendOTP.addEventListener("click" , async ()=>{
  let phoneNo = document.querySelector("#phone").value;
  // const error = document.querySelector("#error");
  // const rickshawNo =
  //   check === true ? document.querySelector("#rickshaw").value : "XYZ";
  // console.log("$$$$", name, password, email, phoneNo, rickshawNo);
  // spanotp.value=phoneNo;
  phoneNo="+91"+phoneNo;
  // var formstatus=((nameclass.contains("is-valid")) && (emailclass.contains("is-valid")) && (phoneclass.contains("is-valid")) && (passclass.contains("is-valid")) && ((driver.checked && rickclass.contains("is-valid")) || passenger.checked));
  // if(formstatus){
  //   console.log("formstatus");
    
    
    const otpurl = "http://localhost:3000/getOtp";
    // const verifyOtp = "http://localhost:3000/verifyOtp";
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
    // if (!resp1.key) {
    //   alert(" Some error occured ");
    // }
    // else{
    //   otpbox.style.visibility="visible";
    //   content.style.visibility="hidden";
    // }
  // }
})

name1.addEventListener("input",function(){
  const nameregex=/^[a-zA-Z ]*$/;
  if(name1.value.length==0 || !nameregex.test(name1.value)){
    if(!nameclass.contains("is-invalid")){
      nameclass.add("is-invalid");
    }
    if(nameclass.contains("is-valid")){
      nameclass.remove("is-valid");
    }
    
  }
  else{
    if(!nameclass.contains("is-valid")){
      nameclass.add("is-valid");
    }
    if(nameclass.contains("is-invalid")){
      nameclass.remove("is-invalid");
    }
  }
});

email1.addEventListener("input",function(){
  const emailreg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if(!emailreg.test(email1.value)){
    if(!emailclass.contains("is-invalid")){
      emailclass.add("is-invalid");
    }
    if(emailclass.contains("is-valid")){
      emailclass.remove("is-valid");
    }
    
  }
  else{
    if(!emailclass.contains("is-valid")){
      emailclass.add("is-valid");
    }
    if(emailclass.contains("is-invalid")){
      emailclass.remove("is-invalid");
    }
  }
});

phone.addEventListener("input",function(){
  const phoneregex=/^[6-9]\d{9}$/;
  
  if(!phoneregex.test(phone.value)){
    if(!phoneclass.contains("is-invalid")){
      phoneclass.add("is-invalid");
    }
    if(phoneclass.contains("is-valid")){
      phoneclass.remove("is-valid");
    }
    
  }
  else{
    if(!phoneclass.contains("is-valid")){
      phoneclass.add("is-valid");
    }
    if(phoneclass.contains("is-invalid")){
      phoneclass.remove("is-invalid");
    }
  }
});

password.addEventListener("input",function(){
  const passregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#])[A-Za-z\d@$!]{8,20}$/;
  
  if(!passregex.test(password.value)){
    if(!passclass.contains("is-invalid")){
      passclass.add("is-invalid");
    }
    if(passclass.contains("is-valid")){
      passclass.remove("is-valid");
    }
    
  }
  else{
    if(!passclass.contains("is-valid")){
      passclass.add("is-valid");
    }
    if(passclass.contains("is-invalid")){
      passclass.remove("is-invalid");
    }
  }
});

rickshaw.addEventListener("input",function(){
  const rickregex=/^[A-Z]{2}-\d{2}-[A-Z]{2}-\d{1,4}$/;
  
  if(!rickregex.test(rickshaw.value)){
    if(!rickclass.contains("is-invalid")){
      rickclass.add("is-invalid");
    }
    if(rickclass.contains("is-valid")){
      rickclass.remove("is-valid");
    }
    
  }
  else{
    if(!rickclass.contains("is-valid")){
      rickclass.add("is-valid");
    }
    if(rickclass.contains("is-invalid")){
      rickclass.remove("is-invalid");
    }
  }
});



const passenger = document.getElementById("passenger");
passenger.addEventListener("click", function () {
  const rickshawField = document.querySelector("#rickshawField");
  const phoneField=document.getElementById("phoneField");
  const passwordField=document.getElementById("passwordField");
  phoneField.className="col-md-6";
  passwordField.className="col-md-6";
  rickshawField.style.display = "none";

});

// const passenger = document.getElementById("passenger");
driver.addEventListener("click", function () {
  const rickshawField = document.querySelector("#rickshawField");
  const phoneField=document.getElementById("phoneField");
  const passwordField=document.getElementById("passwordField");
  
  phoneField.className="col-md-4";
  passwordField.className="col-md-4";
  rickshawField.style.display = "block";
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
  let phoneNo = document.querySelector("#phone").value;
  const error = document.querySelector("#error");
  const rickshawNo =
    check === true ? document.querySelector("#rickshaw").value : "XYZ";
  console.log("$$$$", name, password, email, phoneNo, rickshawNo);
  spanotp.innerHTML=phoneNo;
  phoneNo="+91"+phoneNo;
  var formstatus=((nameclass.contains("is-valid")) && (emailclass.contains("is-valid")) && (phoneclass.contains("is-valid")) && (passclass.contains("is-valid")) && ((driver.checked && rickclass.contains("is-valid")) || passenger.checked));
  if(formstatus){
    console.log("formstatus");
    
    
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
      error1.innerHTML="Some error occured in otp generation.";
      errorMessage.style.visibility="visible";
      setTimeout(()=>{
        errorMessage.style.visibility="hidden";
      } , 2000 ) ;
    }
    else{
      success.innerHTML="OTP Sended Successfully.";
      success.style.visibility="visible";
      setTimeout(()=>{
        success.style.visibility="hidden";
      } , 2000 ) ;
      otpbox.style.visibility="visible";
      content.style.visibility="hidden";
      title1.style.visibility="hidden";
    }
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
          success.innerHTML="Registered Successfully.";
          success.style.visibility="visible";
          setTimeout(()=>{
            success.style.visibility="hidden";
          } , 2000 ) ;
          otpbox.style.visibility="hidden";
          title1.style.visibility="visible";
          content.style.visibility="visible";
          window.location.href=LOGIN_URL;
        } else {
          console.log(" got false ");
          // window.open(LOGIN_URL);
          // window.location = LOGIN_URL;
          otpbox.style.visibility="hidden";
          title1.style.visibility="visible";
          content.style.visibility="visible";
          error1.innerHTML="User already Exist";
          errorMessage.visibility="visible";
          setTimeout(()=>{
             eroorMessage.style.visibility="hidden";
          } , 2000 ) ;
          window.open(LOGIN_URL);
        }
        return "ahhh";
      });
    // else {
    //   console.log(" hi ");
    // }
  } else {
    error1.innerHTML="invalid OTP";
    errorMessage.style.visibility="visible";
    setTimeout(()=>{
      errorMessage.style.visibility="hidden";

    } , 2000 ) ; 
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
