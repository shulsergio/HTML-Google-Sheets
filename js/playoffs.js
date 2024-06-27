import { onTopScoresList } from "./function.js";
import { onCreateDataFromJson } from "./function.js";
let itemStage = document.querySelector(".js-stage-playoff");
const dropdown = document.querySelector("#options");

onSelectStageData();
updateHtmlData("1/8");
itemStage.addEventListener("click", (evt) => {
  document.querySelectorAll(".js-select").forEach((item) => {
    item.classList.remove("selected");
  });
  let chooseStage = evt.target.textContent;
  evt.target.classList.add("selected");
  updateHtmlData(chooseStage);
});

// ----------functions--------
/**
 * onSelectStageData() - func for transit
 *  between Play-offs <-> Main stage
 */
function onSelectStageData() {
  dropdown.selectedIndex = 1;
  dropdown.addEventListener("change", (evt) => {
    console.log(`Selected value: ${evt.target.value}`);
    if (evt.target.value == "Play-offs") {
      dropdown.selectedIndex = 1;
      location.href = "./playoffs.html";
    }
    if (evt.target.value == "Main stage") {
      dropdown.selectedIndex = 0;
      location.href = "./group-table.html";
    }
  });
}

async function onCreateHtmlData(chooseStage) {
  let allFixtures1 = await onCreateDataFromJson();

  console.log("chooseStage in start- ", chooseStage);
  let allFixtures = allFixtures1
    .filter((item) => item.Group === chooseStage)
    .map((item) => {
      return `<div class="playoff-list">
      <p class="playoffs-text-style data-playoff">${item.HomeTeamStatus}</p>
              <p class="playoffs-text-style name-playoff">${item.HomeTeam}</p>
              <p class="playoffs-text-style data-playoff">|</p>
              <p class="playoffs-text-style goal-playoff">
              ${
                item.HomeTeamScore === null
                  ? item.DateUtc.slice(5, 10)
                  : item.HomeTeamScore
              }</p>
            </div>
            <div class="playoff-list">
            <p class="playoffs-text-style data-playoff">${
              item.AwayTeamStatus
            }</p>
              <p class="playoffs-text-style name-playoff">${item.AwayTeam}</p>
              <p class="playoffs-text-style data-playoff">|</p>
              <p class="playoffs-text-style goal-playoff">${
                item.AwayTeamScore === null ? "" : item.AwayTeamScore
              }</p>
            </div>`;
    })
    .join("");
  return allFixtures;
}

async function updateHtmlData(chooseStage) {
  let htmlData = await onCreateHtmlData(chooseStage);
  let newHtmlData = document.querySelector(".teams-playoff-list");
  newHtmlData.innerHTML = "";
  newHtmlData.insertAdjacentHTML("beforeend", htmlData);

  console.log("chooseStage last- ", chooseStage);
}
