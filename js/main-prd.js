const scriptURL =
  "https://script.google.com/macros/s/AKfycbyD11iL0i7Q_6q2b0a6rjn6iSiM7LyKakc0VmqxeQejoNUjlLrbGfxOFlcs0rC9BBSdgQ/exec";
const form = document.forms["submit-to-google-sheet"];
const LS_KEY_TEAM = "Team";
const LS_KEY_GROUP = "Group";
const textOk = document.querySelector(".special-item");
form.addEventListener("click", onTeamChoise);

if (new Date().getHours() >= 22) {
  const btnSubmit = document.querySelector(".submitbtn");
  btnSubmit.style.display = "none";
}

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
form.addEventListener("submit", (e) => {
  textOk.innerHTML = "wait...";
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      textOk.innerHTML = "Your data is uploaded!!!";
    })
    .catch((error) => console.error("Error!", error.message));
});
