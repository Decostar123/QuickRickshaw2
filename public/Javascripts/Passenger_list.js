// const passengers = [
//   { name: "A", phoneNo: "123" },
//   { name: "B", phoneNo: "456" },
//   {
//     name: "C",
//     phoneNo: "789",
//   },
// ];
// const PASSENGER_LIST = "http://localhost:3000/driver/passengers";
// const LOGOUT_URL = "http://localhost:3000/logout";
const DRIVER_LIST = "https://quickrickshaw-qij2.onrender.com/driver/passengers"  ; 
const LOGOUT_URL = "https://quickrickshaw-qij2.onrender.com/logout";
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

function message(){
  let arr = [] ; 
 alert(" message shoeinf ") ; 
 
 fetch(DRIVER_LIST).then( res => res.json())
 .then( data => { 
   arr = data.result ; 
   console.log( data.result)
   alert(arr) ; 
 const table = document.querySelector("#tables").getElementsByTagName('tbody')[0];
  for (entry of arr ) {
         var row = table.insertRow();
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         // const data = `<tr><td>${entry.name}</td><td>${entry.phoneNo}</td>
         // <td>${entry.name}</td><td>${entry.name}</td></tr>`;
         // table.innerHTML += data;
         cell1.innerHTML = entry.name;
         cell2.innerHTML = entry.phoneNo;
       } 

 
 
 
 
 } 
    ) ; 
   // const data = await resp.json();
   // const passengers = data.result;
   // for (entry of passengers) {
   //       var row = table.insertRow();
   //       var cell1 = row.insertCell(0);
   //       var cell2 = row.insertCell(1);
   //       // const data = `<tr><td>${entry.name}</td><td>${entry.phoneNo}</td>
   //       // <td>${entry.name}</td><td>${entry.name}</td></tr>`;
   //       // table.innerHTML += data;
   //       cell1.innerHTML = entry.name;
   //       cell2.innerHTML = entry.phoneNo;
   //     } 
   // console.log( passengers ) ; 

}
// window.addEventListener( "load" ,  async (event ) => {
//   const table = document.querySelector("#table");
//   // console.log(table.innerHTML, "44444");
//   console.log(table);
//   const resp = await fetch(DRIVER_LIST);
//   const data = await resp.json();
//   const passengers = data.result;
//   console.log( "the list of passengers " , passengers ) ; 

//   for (entry of passengers) {
//     var row = table.insertRow();
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     // const data = `<tr><td>${entry.name}</td><td>${entry.phoneNo}</td>
//     // <td>${entry.name}</td><td>${entry.name}</td></tr>`;
//     // table.innerHTML += data;
//     cell1.innerHTML = entry.name;
//     cell2.innerHTML = entry.phoneNo;
//   }
//   console.log(passengers);
// }) ;
