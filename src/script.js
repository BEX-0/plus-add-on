function updatePlaceholders() {
    let newYork = document.querySelector("#new-york");
    let newYorkData = moment.tz("America/New_York");
    let newYorkDate = newYork.querySelector(".date");
    newYorkDate.innerHTML = newYorkData.format("dddd MMMM D, YYYY");

    let newYorkTime = newYork.querySelector(".time");
    newYorkTime.innerHTML = newYorkData.format(`h:mm:ss [<small>] A[</small>]`);


    let amsterdam = document.querySelector("#amsterdam");
    let amsterdamData = moment.tz("Europe/Amsterdam");
    let amsterdamDate = amsterdam.querySelector(".date");
    amsterdamDate.innerHTML = amsterdamData.format("dddd MMMM D, YYYY");

    let amsterdamTime = amsterdam.querySelector(".time");
    amsterdamTime.innerHTML =amsterdamData.format(`h:mm:ss [<small>] A[</small>]`);
}

updatePlaceholders();
setInterval(updatePlaceholders, 1000);

function showDateTime(event) {
    let timezone = event.target.value;
    let currentData = moment().tz(timezone);
    let locationList = document.querySelector(".location-list")
    locationList.innerHTML = `
    <div class="row">
        <div class="col left">
            <div class="name">${timezone}</div>
            <div class="date">${currentData.format("dddd MMMM D, YYYY")}</div>
        </div>
        <div class="col right">
            <div class="time">${currentData.format(`h:mm:ss [<small>] A[</small>]`)}</div>
        </div>
    </div>    `
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showDateTime);
