import { onTopScoresList } from "./function.js";
import { onCreateDataFromJson } from "./function.js";

const newHtmlData = document.querySelector(".js-tbody-matches");
const LS_KEY_TEAM = "Team";
const LS_KEY_GROUP = "Group";
const teamChoice = JSON.parse(localStorage.getItem(LS_KEY_TEAM)) ?? "All";
const groupChoice = JSON.parse(localStorage.getItem(LS_KEY_GROUP)) ?? "All";
let teamStats = { win: 0, draw: 0, lose: 0 };

const dataChart = {
  labels: ["Wins", "Draw", "Lose"],
  datasets: [
    {
      data: [0, 0, 0], // Начальные значения
      backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"],
      borderWidth: 2,
    },
  ],
};

// Конфигурация графика
const config = {
  type: "doughnut",
  data: dataChart,
  options: {
    responsive: true, // Поддержка адаптивного дизайна
    plugins: {
      legend: {
        display: false, // Отображение легенды
      },
    },
  },
};

async function onCreateHtmlData(ChoiceTeam, groupChoice) {
  localStorage.removeItem(LS_KEY_TEAM);
  localStorage.removeItem(LS_KEY_GROUP);

  const header = document.querySelector(".table-container h2");
  header.innerHTML = `${ChoiceTeam} matches`;
  console.log(header);

  let allFixtures1 = await onCreateDataFromJson();
  teamStats = { win: 0, draw: 0, lose: 0 };
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
        if (
          HomeTeamScore !== null &&
          (HomeTeam === teamChoice || AwayTeam === teamChoice)
        ) {
          console.log("HomeTeamScore- ", HomeTeamScore);
          if (HomeTeamScore === AwayTeamScore) {
            console.log("draw ");
            teamStats.draw++;
          } else if (HomeTeamScore < AwayTeamScore) {
            console.log("HT menshe ");
            HomeTeam === teamChoice ? teamStats.lose++ : teamStats.win++;
          } else {
            console.log("HT bolshe ");
            HomeTeam === teamChoice ? teamStats.win++ : teamStats.lose++;
          }
          console.log(teamStats);
        }

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
    onChartDataTeamCreate();
  }
}

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

function onChartDataTeamCreate() {
  // ----------chart.js
  const ctx = document.getElementById("bubleChart");
  const progressChart = new Chart(ctx, config);
  progressChart.data.datasets[0].data = [
    teamStats.win,
    teamStats.draw,
    teamStats.lose,
  ];

  const dataChartHtml = document.querySelector(".js-chart-story");
  let allMatches = teamStats.win + teamStats.draw + teamStats.lose;
  dataChartHtml.innerHTML = `
<p>${allMatches} matches</p>
<p>${teamStats.win} wins</p>
<p>${teamStats.draw} draw</p>
<p>${teamStats.lose} lose</p>`;
}

updateHtmlData();
