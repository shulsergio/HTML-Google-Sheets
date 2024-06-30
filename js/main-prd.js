const scriptURL =
  "https://script.google.com/macros/s/AKfycbyD11iL0i7Q_6q2b0a6rjn6iSiM7LyKakc0VmqxeQejoNUjlLrbGfxOFlcs0rC9BBSdgQ/exec";
const form = document.forms["submit-to-google-sheet"];
const LS_KEY_TEAM = "Team";
const LS_KEY_GROUP = "Group";
const textOk = document.querySelector(".special-item");
const textTimer = document.querySelector(".js-timer");
const TIME_FOR_CLOSED = 19; // CLOSED Prediction
const finalData = new Date(2024, 6, 14, 22, 0, 0); // FINAL DATE

form.addEventListener("click", onTeamChoise);

if (new Date().getHours() >= TIME_FOR_CLOSED) {
  const btnSubmit = document.querySelector(".submitbtn");
  btnSubmit.style.display = "none";
}
const id = setInterval(() => {
  onTimer();
}, 1000);

function onTeamChoise(evt) {
  let TeamText = "";
  if (evt.target.classList.contains("js-team-prediction")) {
    TeamText = evt.target.textContent;
    localStorage.setItem(LS_KEY_TEAM, JSON.stringify(TeamText));
    location.href = "./main-matches.html";
  }
  if (evt.target.classList.contains("js-group-prediction")) {
    TeamText = evt.target.textContent;
    localStorage.setItem(LS_KEY_GROUP, JSON.stringify(TeamText));
    location.href = "./main-matches.html";
  } else {
    return;
  }
}

function onTimer() {
  const currentData = new Date();
  let day = 1000 * 60 * 60 * 24;
  let hour = 1000 * 60 * 60;
  let minutes = 1000 * 60;
  let xx = finalData - currentData;
  let diffDay = Math.floor(xx / day);
  let difHour = Math.floor((xx % day) / hour);
  let difMin = Math.floor(((xx % day) % hour) / minutes);
  let difSec = Math.floor((((xx % day) % hour) % minutes) / 1000);
  textTimer.innerHTML = `${diffDay} days ${difHour} : ${difMin} : ${difSec} </br> 
    <span class="block-span-timer">due to the</span> </br> EURO 2024 FINAL`;
}

form.addEventListener("submit", (e) => {
  textOk.innerHTML = "wait...";
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      textOk.innerHTML = "Your data is uploaded!!!";
    })
    .catch((error) => console.error("Error!", error.message));
});
