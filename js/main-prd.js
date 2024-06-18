const scriptURL =
  "https://script.google.com/macros/s/AKfycbzPLv5SFBxUHRXOkp3uNvRBwo156yBpG0VXIDfpihcLNXW4IARuF3uOdsEHxshxBzF45Q/exec";
const form = document.forms["submit-to-google-sheet"];
const LS_KEY_TEAM = "Team";
const LS_KEY_GROUP = "Group";
const textOk = document.querySelector(".special-item");
form.addEventListener("click", onTeamChoise);

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
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      textOk.innerHTML = "Your data is uploaded!!!";
    })
    .catch((error) => console.error("Error!", error.message));
});
