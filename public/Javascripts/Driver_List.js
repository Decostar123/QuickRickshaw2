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
  console.log(table.innerHTML, "44444");
  console.log(table);
  for (entry of passengers) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    // const data = `<tr><td>${entry.name}</td><td>${entry.phoneNo}</td>
    // <td>${entry.name}</td><td>${entry.name}</td></tr>`;
    // table.innerHTML += data;
    cell1.innerHTML = entry.name;
    cell2.innerHTML = entry.phoneNo;
    cell3.innerHTML = "3";
    cell4.innerHTML = "4";
  }
  console.log(table.innerHTML);
};
