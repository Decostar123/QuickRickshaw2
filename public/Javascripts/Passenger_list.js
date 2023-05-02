const passengers = [
  { name: "A", phoneNo: "123" },
  { name: "B", phoneNo: "456" },
  {
    name: "C",
    phoneNo: "789",
  },
];

window.onload = () => {
  const table = document.querySelector("#table");
  for (entry of passengers) {
    const data = `<tr><td>${entry.name}</td><td>${entry.phoneNo}</td></tr>`;
    table.innerHTML += data;
  }
};
