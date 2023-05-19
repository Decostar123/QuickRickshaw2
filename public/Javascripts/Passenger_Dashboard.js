console.log(" passenger dashboard ");
const driverList = document.querySelector("#driverList");
const DAvailable = document.querySelector("#DAvailable");
const DNotAvailable = document.querySelector("#DNotAvailable");
const success=document.getElementById("success");
const error=document.getElementById("error");
const errorMessage=document.getElementById("errorMessage");
const PASSENGER_URL = "http://localhost:3000/user/driverList";
const DAvailable_URL = "http://localhost:3000/user/PAvailable";
const PNotAvailable_URL = "http://localhost:3000/user/PNotAvailable";
// const PASSENGER_URL = "https://quickrickshaws.onrender.com/user/driverList";
// const DAvailable_URL = "https://quickrickshaws.onrender.com/user/PAvailable";
// const PNotAvailable_URL = "https://quickrickshaws.onrender.com/user/PNotAvailable";
const LOGOUT_URL = "http://localhost:3000/logout";
const logOut = document.querySelector("#logOut") ;
const send = document.querySelector("#send") ;  
const suggestion  = document.querySelector("#suggestion") ; 
const container  = document.querySelector("#feedbackCointainer") ; 
const cancel =  document.querySelector("#cancel") ;  
const  mainContainer = document.querySelector("#mainContainer") ; 
cancel.addEventListener( "click" , () =>{
  container.style.visibility = "hidden" ; 
      mainContainer.style.visibility = "visible" ; 
})
suggestion.addEventListener("click" , ()=>{
  container.style.visibility = "visible" ; 
  mainContainer.style.visibility = "hidden" ; 
})
send.addEventListener( "click" , async ()=>{
  const feedback = document.querySelector("#floatingTextarea").value ; 
  console.log( feedback  ); 
  const feedbackURL = "http://localhost:3000/user/feedback" ; 
  const data = {feedback} ; 
  const resp1 = await fetch( feedbackURL , {
    method :"post" , 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  } ) ; 
  const resp2 = await resp1.json() ; 
  if( resp2.key ){
      // alert("send successfuly ") ; 
      success.innerHTML="send successfuly ";
      success.style.visibility="visible";
      setTimeout(()=>{
        success.style.visibility="hidden";
      } , 2000 ) ;
      container.style.visibility = "hidden" ; 
      mainContainer.style.visibility = "visible" ; 
  }else{
    // alert(" error in sending ")  ; 
    errorMessage.innerHTML="some error occured!! Try again later";
        error.style.visibility="visible";
        setTimeout(()=>{
          error.style.visibility="hidden";
    
        } , 2000 ) ; 
  }


})
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
