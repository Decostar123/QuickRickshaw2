console.log(" passenger dashboard ");
const driverList = document.querySelector("#driverList");
const DAvailable = document.querySelector("#DAvailable");
const DNotAvailable = document.querySelector("#DNotAvailable");

const PASSENGER_URL = "http://localhost:3000/user/driverList";
const DAvailable_URL = "http://localhost:3000/user/PAvailable";
const PNotAvailable_URL = "http://localhost:3000/user/PNotAvailable";
// const PASSENGER_URL = "https://quickrickshaws.onrender.com/user/driverList";
// const DAvailable_URL = "https://quickrickshaws.onrender.com/user/PAvailable";
// const PNotAvailable_URL = "https://quickrickshaws.onrender.com/user/PNotAvailable";
const LOGOUT_URL = "http://localhost:3000/logout";
const logOut = document.querySelector("#logOut") ; 
logOut.addEventListener('click' , async () =>{
  console.log("aaaa") ; 
  const ans = confirm("Are you sure to LOG OUT ?") ; 
  if( ans )
  {
    const res = await fetch(LOGOUT_URL) ; 
   const data = res.json() ; 
   console.log( data.key ) ;
  }else{
    
  }
    
})
driverList.addEventListener("click", () => {
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
  fetch(PNotAvailable_URL)
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
