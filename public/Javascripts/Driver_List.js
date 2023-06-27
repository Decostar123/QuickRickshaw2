// const passengers = [
//   { name: "A", phoneNo: "123" },
//   { name: "B", phoneNo: "456" },
//   {
//     name: "C",
//     phoneNo: "789",
//   },
// ];
// const LOGOUT_URL = "http://localhost:3000/logout";
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
// const PASSENGER_LIST = "http://localhost:3000/user/drivers";
// const PASSENGER_LIST = "https://quickrickshaws.onrender.com/driver/passengers";
const PASSENGER_LIST = "https://quickrickshaw-qij2.onrender.com/user/drivers";
// DO NOT CONFUSE WITH THE NAME .... 
// const body = document.getElementsByTagName("body")[0];
const temp = document.querySelector("#tables") ; 
 function message(){
   let arr = [] ; 
  alert(" message shoeinf ") ; 
  
  fetch(PASSENGER_LIST).then( res => res.json())
  .then( data => { 
    arr = data.result ; 
    console.log( data.result)
    alert(arr) ; 
  const table = document.querySelector("#tables").getElementsByTagName('tbody')[0];
   for (entry of arr ) {
          var row = table.insertRow();
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          // const data = `<tr><td>${entry.name}</td><td>${entry.phoneNo}</td>
          // <td>${entry.name}</td><td>${entry.name}</td></tr>`;
          // table.innerHTML += data;
          cell1.innerHTML = entry.name;
          cell2.innerHTML = entry.phoneNo;
          cell3.innerHTML = entry.rickshawNo ; 
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
// temp.addEventListener("load",  () => {
//   // console.log("Hello World!");
//   // const table = document.querySelector("#tables").getElementsByTagName('tbody')[0];

//   //   // const table = document.querySelector("#table");
//   // // console.log(table.innerHTML, "44444");
//   // // console.log(table);
//   // const resp = await fetch(PASSENGER_LIST);
//   // const data = await resp.json();
//   // const passengers = data.result;
//   // console.log( "the list of passengers " , passengers ) ; 

//   // for (entry of passengers) {
//   //   var row = table.insertRow();
//   //   var cell1 = row.insertCell(0);
//   //   var cell2 = row.insertCell(1);
//   //   // const data = `<tr><td>${entry.name}</td><td>${entry.phoneNo}</td>
//   //   // <td>${entry.name}</td><td>${entry.name}</td></tr>`;
//   //   // table.innerHTML += data;
//   //   cell1.innerHTML = entry.name;
//   //   cell2.innerHTML = entry.phoneNo;
//   // }
//   // console.log(passengers);

//   alert(  " the body has laoded ") ; 


//   // alert("will start fetching ") ;
// }  );
// window.addEventListener("load" , async (event ) => {
//   const table = document.querySelector("#table");
//   // console.log(table.innerHTML, "44444");
//   console.log(table);
//   const resp = await fetch(PASSENGER_LIST);
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
// } ) ;
