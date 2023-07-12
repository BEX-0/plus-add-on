function showDateTime(event) {
    let timezone = event.target.value;
    let currentDateTime = moment.tz(timezone).format("dddd, MMMM D, YYYY h:m A");
        alert(`It is ${currentDateTime} in ${timezone}`);
}

let countrySelect = document.querySelector("#countries");
countrySelect.addEventListener("change", showDateTime);
