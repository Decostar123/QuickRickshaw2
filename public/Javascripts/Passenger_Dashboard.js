console.log(" passenger dashboard ");
const passengerList = document.querySelector("#passengerList");
const DAvailable = document.querySelector("#DAvailable");
const DNotAvailable = document.querySelector("#DNotAvailable");

const PASSENGER_URL = "http://localhost:3000/user/driverList";
const DAvailable_URL = "http://localhost:3000/user/PAvailable";
const PNotAvailable_URL = "http://localhost:3000/user/PNotAvailable";
// const PASSENGER_URL = "https://quickrickshaws.onrender.com/user/driverList";
// const DAvailable_URL = "https://quickrickshaws.onrender.com/user/PAvailable";
// const PNotAvailable_URL = "https://quickrickshaws.onrender.com/user/PNotAvailable";

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
        alert("marked available");
      } else {
        alert(" some error occured ! try latr ");
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
        alert("marked not available");
      } else {
        alert(" some error occured ! try latr ");
      }
    });
});
