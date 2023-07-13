function updateParis() {
    let paris = document.querySelector("#paris");
    let parisDate = paris.querySelector(".date");
    parisDate.innerHTML = moment.tz("France/Paris")
    .format("dddd MMMM D, YYYY");

    let parisTime = paris.querySelector(".time");
    parisTime.innerHTML = moment.tz("France/Paris")
    .format(`h:mm:ss [<small>] A[</small>]`);
}

updateParis();
setInterval(updateParis, 1000);