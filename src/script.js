function showDateTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "red") {
      alert("❤️");
    }
    if (event.target.value === "blue") {
      alert("💙");
    }
    if (event.target.value === "yellow") {
      alert("💛");
    }
  }
}

let colorSelect = document.querySelector("#colors");
colorSelect.addEventListener("change", showDateTime);
