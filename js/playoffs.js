import { onTopScoresList } from "./function.js";
import { onCreateDataFromJson } from "./function.js";

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
  let allFixtures = allFixtures1
    .filter((item) => item.Group === "Stage 8")
    .map((item) => ({
      HomeTeam: item.HomeTeam,
      AwayTeam: item.AwayTeam,
      HomeTeamScore: item.HomeTeamScore,
      AwayTeamScore: item.AwayTeamScore,
    }));
  console.log(allFixtures);
}

async function updateHtmlData() {
  onSelectStageData();
  const htmlData = await onCreateHtmlData();
  // i posle risuem
}

updateHtmlData();
