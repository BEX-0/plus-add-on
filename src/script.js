function showDateTime(event) {
    let timezone = event.target.value;
    let currentData = moment().tz(timezone);
    let location = document.querySelector(".location")
    location.innerHTML = `
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

showDateTime();
setInterval(showDateTime, 1000);

// .format(`h:mm:ss [<small>] A[</small>]`);

// .format("dddd MMMM D, YYYY");