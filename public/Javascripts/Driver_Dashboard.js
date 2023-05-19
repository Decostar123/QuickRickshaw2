console.log(" driver dashboard ");
const passengerList = document.querySelector("#passengerList");
const DAvailable = document.querySelector("#DAvailable");
const DNotAvailable = document.querySelector("#DNotAvailable");
const success=document.getElementById("success");
const error=document.getElementById("error");
const errorMessage=document.getElementById("errorMessage");

const PASSENGER_URL = "http://localhost:3000/driver/passengerList";
const DAvailable_URL = "http://localhost:3000/driver/DAvailable";
const DNotAvailable_URL = "http://localhost:3000/driver/DNotAvailable";
const DIPAddress = "http://localhost:3000/driver/DIPAddress";
// const PASSENGER_URL =
//   "https://quickrickshaws.onrender.com/driver/passengerList";
// const DAvailable_URL = "https://quickrickshaws.onrender.com/driver/DAvailable";
// const DNotAvailable_URL =
//   "https://quickrickshaws.onrender.com/driver/DNotAvailable";

// let allow = true;
// if (allow) {
//   window.addEventListener("load", function () {
//     const ans = confirm(" Allow to acess your ip address");
//     console.log(ans);
//     if (ans) {

//       this.fetch( )
//     } else {
//       alert(" why not allowed !!!! ");
//     }
//     allow = false;
//   });
// }
passengerList.addEventListener("click", () => {
  window.open(PASSENGER_URL);
});
DAvailable.addEventListener("click", () => {
  fetch(DAvailable_URL)
    .then((res) => res.json())
    .then((data) => {
      alert("marked Available ");
      console.log(data);
      if (data.key) {
        success.innerHTML="Marked Successfully.";
        success.style.visibility="visible";
        setTimeout(()=>{
          success.style.visibility="hidden";
        } , 2000 ) ;
      } else {
        errorMessage.innerHTML="some error occured!! Try again later";
        error.style.visibility="visible";
        setTimeout(()=>{
          error.style.visibility="hidden";
    
        } , 2000 ) ; 
      }
    });
});
DNotAvailable.addEventListener("click", () => {
  console.log(" driver is not Available ");
  fetch(DNotAvailable_URL)
    .then((res) => res.json())
    .then((data) => {
      //   alert("marked not Available ");
      console.log(data);
      if (data.key) {
        success.innerHTML="Removed Successfully.";
        success.style.visibility="visible";
        setTimeout(()=>{
          success.style.visibility="hidden";
        } , 2000 ) ;
      } else {
        errorMessage.innerHTML="some error occured!! Try again later";
        error.style.visibility="visible";
        setTimeout(()=>{
          error.style.visibility="hidden";
    
        } , 2000 ) ; 
      }
    });
});
