import { onTopScoresList } from "./function.js";
import { onCreateDataFromJson } from "./function.js";

const newHtmlData = document.querySelector(".js-tbody-matches");
const LS_KEY_TEAM = "Team";
const LS_KEY_GROUP = "Group";
const teamChoice = JSON.parse(localStorage.getItem(LS_KEY_TEAM)) ?? "All";
const groupChoice = JSON.parse(localStorage.getItem(LS_KEY_GROUP)) ?? "All";

async function onCreateHtmlData(ChoiceTeam, groupChoice) {
  localStorage.removeItem(LS_KEY_TEAM);
  localStorage.removeItem(LS_KEY_GROUP);

  const header = document.querySelector(".table-container h2");
  header.innerHTML = `${ChoiceTeam} matches`;
  console.log(header);

  let allFixtures1 = await onCreateDataFromJson();

  return allFixtures1
    .map(
      ({
        DateUtc,
        HomeTeam,
        AwayTeam,
        Group,
        HomeTeamScore,
        AwayTeamScore,
      }) => {
        let newDate = DateUtc.slice(5, 10);
        HomeTeamScore = HomeTeamScore === null ? " " : HomeTeamScore;
        AwayTeamScore = AwayTeamScore === null ? " " : AwayTeamScore;

        if (groupChoice == Group || groupChoice == "All") {
          if (
            ChoiceTeam == "All" ||
            ChoiceTeam === HomeTeam ||
            ChoiceTeam === AwayTeam
          ) {
            return `<tr>
                    <td>${newDate}</td>
                    <td>${Group.slice(6, 7)}</td>
                    <td class="table-team-name js-team-name">${HomeTeam}</td>
                    <td class="table-team-name js-team-name">${AwayTeam}</td>
                    <td>${HomeTeamScore}</td>
                    <td>${AwayTeamScore}</td>
                  </tr>`;
          } else {
            return "";
          }
        } else {
          return "";
        }
      }
    )
    .join("");
}

async function updateHtmlData() {
  const htmlData = await onCreateHtmlData(teamChoice, groupChoice);
  newHtmlData.insertAdjacentHTML("beforeend", htmlData);
  console.log("teamChoice");
  console.log(teamChoice);
  if (teamChoice !== "All") {
    newTopScoresData(teamChoice);
  }
}

updateHtmlData();

async function newTopScoresData(teamChoice) {
  let allFixtures1 = await onCreateDataFromJson();
  let newData = onTopScoresList(allFixtures1, teamChoice);
  const addShablonTopScores = document.querySelector(".js-table-topscores");
  addShablonTopScores.innerHTML = `<h2>Top Scorer</h2>
          <div class="tables-main">
            <table class="scorer-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Goal</th>
                </tr>
              </thead>
              <tbody class="js-tbody-topscores"></tbody>
            </table>
          </div>`;
  const htmlShablonData = document.querySelector(".js-tbody-topscores");
  let i = 0;
  let htmlData = newData
    .map(({ name, team, goals }) => {
      i = i + 1;
      return ` <tr>
        <td>${i}</td>
        <td class="scorer-team-name">${name}</td>
        <td class="scorer-team-item">${team}</td>
        <td>${goals}</td>
        </tr>`;
    })
    .join("");
  htmlShablonData.insertAdjacentHTML("beforeend", htmlData);
}
