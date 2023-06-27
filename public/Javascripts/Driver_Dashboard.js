console.log(" driver dashboard ");
const passengerList = document.querySelector("#passengerList");
const DAvailable = document.querySelector("#DAvailable");
const DNotAvailable = document.querySelector("#DNotAvailable");
const errorMessage=document.getElementById("errorMessage");
const error1=document.getElementById("error1");
const success=document.getElementById("success");
const success1=document.getElementById("success1");

const send = document.querySelector("#send") ;  
const suggestion  = document.querySelector("#suggestion") ; 
const feedbackCointainer  = document.querySelector("#feedbackCointainer") ; 
const cancel =  document.querySelector("#cancel") ;  
const  mainContainer = document.querySelector("#mainContainer") ; 

// const PASSENGER_URL = "http://localhost:3000/driver/passengerList";
// const DAvailable_URL = "http://localhost:3000/driver/DAvailable";
// const DNotAvailable_URL = "http://localhost:3000/driver/DNotAvailable";
// const DIPAddress = "http://localhost:3000/driver/DIPAddress";
// const LOGOUT_URL = "http://localhost:3000/logout" ;
// https://quickrickshaw-qij2.onrender.com
const PASSENGER_URL = "https://quickrickshaw-qij2.onrender.com/driver/passengerList";
const DAvailable_URL = "https://quickrickshaw-qij2.onrender.com/driver/DAvailable";
const DNotAvailable_URL = "https://quickrickshaw-qij2.onrender.com/driver/DNotAvailable";
const DIPAddress = "https://quickrickshaw-qij2.onrender.com/driver/DIPAddress";
const LOGOUT_URL = "https://quickrickshaw-qij2.onrender.com/logout" ;
const logOut = document.querySelector("#logOut") ; 

// const send = document.querySelector("#send") ;
const feedbackclass=feedbackCointainer.classList;
const mainclass=mainContainer.classList;
const errorclass=errorMessage.classList;
const successclass=success.classList;




cancel.addEventListener( "click" , () =>{
  // feedbackCointainer.style.visibility = "hidden" ; 
  //     mainContainer.style.visibility = "visible" ; 
  feedbackclass.add="d-none";
  mainclass.remove="d-none";
})
suggestion.addEventListener("click" , ()=>{
  // feedbackCointainer.style.visibility = "visible" ; 
  // mainContainer.style.visibility = "hidden" ; 
  feedbackclass.remove="d-none";
  mainclass.add="d-none";
})
send.addEventListener( "click" , async ()=>{
  const feedback = document.querySelector("#floatingTextarea").value ; 
  console.log( feedback  ); 
  // const feedbackURL = "http://localhost:3000/driver/feedback" ; 
  const feedbackURL = "https://quickrickshaw-qij2.onrender.com/driver/feedback" ; 
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
      
      console.log( " response received ")
      // success.innerHTML="send successfuly ";
      // success.style.visibility="visible";
      // setTimeout(()=>{
      //   success.style.visibility="hidden";
      // } , 2000 ) ;
      success1.innerHTML="send successfully";
      successclass.remove="d-none";
      setTimeout(()=>{
        successclass.add="d-none";
      } , 2000 ) ;
      // feedbackCointainer.style.visibility = "hidden" ; 
      // mainContainer.style.visibility = "visible" ; 
      feedbackclass.add="d-none";
      mainclass.remove="d-none";
  }else{
    // alert(" error in sending ")  ; 
    // errorMessage.innerHTML="some error occured!! Try again later";
    //     error.style.visibility="visible";
    //     setTimeout(()=>{
    //       error.style.visibility="hidden";
    
    //     } , 2000 ) ; 
    error1.innerHTML="some error occured!! Try again later";
    errorclass.remove="d-none";
    setTimeout(()=>{
      errorclass.add="d-none";
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
   success1.innerHTML="Logged out successfully";
    successclass.remove="d-none";
    setTimeout(()=>{
      successclass.add="d-none";
    } , 2000 ) ;
  }else{
    
  }
    
})
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
      // alert("marked Available ");
      console.log(data);
      if (data.key) {
        // success.innerHTML="Marked Successfully.";
        // success.style.visibility="visible";
        // setTimeout(()=>{
        //   success.style.visibility="hidden";
        // } , 2000 ) ;
        success1.innerHTML="Marked Successfully";
        successclass.remove="d-none";
        setTimeout(()=>{
          successclass.add="d-none";
        } , 2000 ) ;
      } else {
        // errorMessage.innerHTML="some error occured!! Try again later";
        // error.style.visibility="visible";
        // setTimeout(()=>{
        //   error.style.visibility="hidden";
    
        // } , 2000 ) ; 
        error1.innerHTML="some error occured!! Try again later";
        errorclass.remove="d-none";
        setTimeout(()=>{
          errorclass.add="d-none";
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
        // success.innerHTML="Removed Successfully.";
        // success.style.visibility="visible";
        // setTimeout(()=>{
        //   success.style.visibility="hidden";
        // } , 2000 ) ;
        success1.innerHTML="Removed Successfully";
        successclass.remove="d-none";
        setTimeout(()=>{
          successclass.add="d-none";
        } , 2000 ) ;

      } else {
        // errorMessage.innerHTML="some error occured!! Try again later";
        // error.style.visibility="visible";
        // setTimeout(()=>{
        //   error.style.visibility="hidden";
    
        // } , 2000 ) ; 
        error1.innerHTML="some error occured!! Try again later";
        errorclass.remove="d-none";
        setTimeout(()=>{
          errorclass.add="d-none";
        } , 2000 ) ;
      }
    });
});
