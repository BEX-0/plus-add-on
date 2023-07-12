let tokyoTime = moment.tz("Asia/Tokyo")
.format("dddd, MMMM D, YYYY h:m A");

let sydneyTime = moment.tz("Austrailia/Sydney")
.format("dddd, MMMM D, YYYY h:m A");

let parisTime = moment.tz("France/Paris")
.format("dddd, MMMM D, YYYY h:m A");

function showDateTime(event) {
    if (event.target.value === "tokyo") {
      alert(`It is ${tokyoTime} in Asia/Tokyo`);
    }
    if (event.target.value === "sydney") {
      alert(`It is ${sydneyTime} in Austrailia/Sydney`);
    }
    if (event.target.value === "paris") {
      alert(`It is ${parisTime} in France/Paris`);
    }
  }

let countrySelect = document.querySelector("#countries");
countrySelect.addEventListener("change", showDateTime);
