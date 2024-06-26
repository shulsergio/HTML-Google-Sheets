const teamFromTableList = document.querySelector(".js-team-name");
const LS_KEY_TEAM = "Team";
const LS_KEY_GROUP = "Group";
teamFromTableList.addEventListener("click", onCheckClick);
function onCheckClick(evt) {
  let TeamText = "";
  if (evt.target.classList.contains("js-team-add")) {
    TeamText = evt.target.textContent;
    localStorage.setItem(LS_KEY_TEAM, JSON.stringify(TeamText));
    location.href = "./main-matches.html";
  }
  if (evt.target.classList.contains("js-group-add")) {
    TeamText = evt.target.textContent;
    localStorage.setItem(LS_KEY_GROUP, JSON.stringify(TeamText));
    location.href = "./main-matches.html";
  } else return;
}
const dropdown = document.querySelector("#options");
dropdown.addEventListener("change", (evt) => {
  console.log(`Selected value: ${evt.target.value}`);
  if (evt.target.value == "Play-offs") {
    location.href = "./oneeighthfinal.html";
  }
});
