import { onTopScoresList } from "./function.js";
import { onCreateDataFromJson } from "./function.js";

const playoffsTeam = [
  "Spain",
  "Georgia",
  "Germany",
  "Denmark",
  "Portugal",
  "Slovenia",
  "France",
  "Belgium",
  "Romania",
  "Slovenia",
  "Netherlands",
  "Austria",
  "Türkiye",
  "England",
  "Italy",
  "Switzerland",
];

function onSelectStageData() {
  const dropdown = document.querySelector("#options");
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

async function onCreateHtmlData() {
  let allFixtures1 = await onCreateDataFromJson();
  let itemStage = document.querySelector(".js-stage-playoff");

  let chooseStage = "1/8";
  document.querySelector('.js-select[href="#1-8"]').classList.add("selected");
  itemStage.addEventListener("click", (evt) => {
    document.querySelectorAll(".js-select").forEach((item) => {
      item.classList.remove("selected");
    });
    console.log(evt.target.textContent);
    evt.target.classList.add("selected");
  });
  console.log(itemStage.text);
  let allFixtures = allFixtures1
    .filter((item) => item.Group === "Stage 8")
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

async function updateHtmlData() {
  onSelectStageData();
  const htmlData = await onCreateHtmlData();
  // i posle risuem
  let newHtmlData = document.querySelector(".teams-playoff-list");
  newHtmlData.insertAdjacentHTML("beforeend", htmlData);
}

updateHtmlData();
