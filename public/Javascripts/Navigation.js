fetch("Navigation.html")
  .then((res) => res.text())
  .then((text) => {
    let oldele = document.querySelector("script#replace_with_navbar");
    let newele = document.createElement("div");
    newele.innerHTML = text;
    oldele.parentNode.replaceChild(newele, oldele);
  });
