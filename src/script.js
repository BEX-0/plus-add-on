function showDateTime(event) {
    if (event.target.value === "tokyo") {
      alert("❤️");
    }
    if (event.target.value === "sydney") {
      alert("💙");
    }
    if (event.target.value === "paris") {
      alert("💛");
    }
  }

let countrySelect = document.querySelector("#countries");
countrySelect.addEventListener("change", showDateTime);
