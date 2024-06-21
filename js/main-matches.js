const allFixtures = [
  {
    MatchNumber: 1,
    RoundNumber: 1,
    DateUtc: "2024-06-14 19:00:00Z",
    Location: "Fußball Arena München",
    HomeTeam: "Germany",
    AwayTeam: "Scotland",
    Group: "Group A",
    HomeTeamScore: 5,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 2,
    RoundNumber: 1,
    DateUtc: "2024-06-15 13:00:00Z",
    Location: "Stadion Köln",
    HomeTeam: "Hungary",
    AwayTeam: "Switzerland",
    Group: "Group A",
    HomeTeamScore: 1,
    AwayTeamScore: 3,
  },
  {
    MatchNumber: 3,
    RoundNumber: 1,
    DateUtc: "2024-06-15 16:00:00Z",
    Location: "Olympiastadion",
    HomeTeam: "Spain",
    AwayTeam: "Croatia",
    Group: "Group B",
    HomeTeamScore: 3,
    AwayTeamScore: 0,
  },
  {
    MatchNumber: 4,
    RoundNumber: 1,
    DateUtc: "2024-06-15 19:00:00Z",
    Location: "BVB Stadion Dortmund",
    HomeTeam: "Italy",
    AwayTeam: "Albania",
    Group: "Group B",
    HomeTeamScore: 2,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 5,
    RoundNumber: 1,
    DateUtc: "2024-06-16 13:00:00Z",
    Location: "Volksparkstadion",
    HomeTeam: "Poland",
    AwayTeam: "Netherlands",
    Group: "Group D",
    HomeTeamScore: 1,
    AwayTeamScore: 2,
  },
  {
    MatchNumber: 6,
    RoundNumber: 1,
    DateUtc: "2024-06-16 16:00:00Z",
    Location: "Arena Stuttgart",
    HomeTeam: "Slovenia",
    AwayTeam: "Denmark",
    Group: "Group C",
    HomeTeamScore: 1,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 7,
    RoundNumber: 1,
    DateUtc: "2024-06-16 19:00:00Z",
    Location: "Arena AufSchalke",
    HomeTeam: "Serbia",
    AwayTeam: "England",
    Group: "Group C",
    HomeTeamScore: 0,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 8,
    RoundNumber: 1,
    DateUtc: "2024-06-17 16:00:00Z",
    Location: "Fußball Arena München",
    HomeTeam: "Romania",
    AwayTeam: "Ukraine",
    Group: "Group E",
    HomeTeamScore: 3,
    AwayTeamScore: 0,
  },
  {
    MatchNumber: 9,
    RoundNumber: 1,
    DateUtc: "2024-06-17 19:00:00Z",
    Location: "Frankfurt Stadion",
    HomeTeam: "Belgium",
    AwayTeam: "Slovakia",
    Group: "Group E",
    HomeTeamScore: 0,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 10,
    RoundNumber: 1,
    DateUtc: "2024-06-17 22:00:00Z",
    Location: "Düsseldorf Arena",
    HomeTeam: "Austria",
    AwayTeam: "France",
    Group: "Group D",
    HomeTeamScore: 0,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 11,
    RoundNumber: 1,
    DateUtc: "2024-06-18 16:00:00Z",
    Location: "BVB Stadion Dortmund",
    HomeTeam: "Türkiye",
    AwayTeam: "Georgia",
    Group: "Group F",
    HomeTeamScore: 3,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 12,
    RoundNumber: 1,
    DateUtc: "2024-06-18 19:00:00Z",
    Location: "RB Arena",
    HomeTeam: "Portugal",
    AwayTeam: "Czechia",
    Group: "Group F",
    HomeTeamScore: 2,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 13,
    RoundNumber: 2,
    DateUtc: "2024-06-19 13:00:00Z",
    Location: "Volksparkstadion",
    HomeTeam: "Croatia",
    AwayTeam: "Albania",
    Group: "Group B",
    HomeTeamScore: 2,
    AwayTeamScore: 2,
  },
  {
    MatchNumber: 14,
    RoundNumber: 2,
    DateUtc: "2024-06-19 16:00:00Z",
    Location: "Arena Stuttgart",
    HomeTeam: "Germany",
    AwayTeam: "Hungary",
    Group: "Group A",
    HomeTeamScore: 2,
    AwayTeamScore: 0,
  },
  {
    MatchNumber: 15,
    RoundNumber: 2,
    DateUtc: "2024-06-19 19:00:00Z",
    Location: "Stadion Köln",
    HomeTeam: "Scotland",
    AwayTeam: "Switzerland",
    Group: "Group A",
    HomeTeamScore: 1,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 16,
    RoundNumber: 2,
    DateUtc: "2024-06-20 13:00:00Z",
    Location: "Fußball Arena München",
    HomeTeam: "Slovenia",
    AwayTeam: "Serbia",
    Group: "Group C",
    HomeTeamScore: 1,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 17,
    RoundNumber: 2,
    DateUtc: "2024-06-20 16:00:00Z",
    Location: "Frankfurt Stadion",
    HomeTeam: "Denmark",
    AwayTeam: "England",
    Group: "Group C",
    HomeTeamScore: 1,
    AwayTeamScore: 1,
  },
  {
    MatchNumber: 18,
    RoundNumber: 2,
    DateUtc: "2024-06-20 19:00:00Z",
    Location: "Arena AufSchalke",
    HomeTeam: "Spain",
    AwayTeam: "Italy",
    Group: "Group B",
    HomeTeamScore: 1,
    AwayTeamScore: 0,
  },
  {
    MatchNumber: 19,
    RoundNumber: 2,
    DateUtc: "2024-06-21 13:00:00Z",
    Location: "Düsseldorf Arena",
    HomeTeam: "Slovakia",
    AwayTeam: "Ukraine",
    Group: "Group E",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 20,
    RoundNumber: 2,
    DateUtc: "2024-06-21 16:00:00Z",
    Location: "Olympiastadion",
    HomeTeam: "Poland",
    AwayTeam: "Austria",
    Group: "Group D",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 21,
    RoundNumber: 2,
    DateUtc: "2024-06-21 19:00:00Z",
    Location: "RB Arena",
    HomeTeam: "Netherlands",
    AwayTeam: "France",
    Group: "Group D",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 22,
    RoundNumber: 2,
    DateUtc: "2024-06-22 13:00:00Z",
    Location: "Volksparkstadion",
    HomeTeam: "Georgia",
    AwayTeam: "Czechia",
    Group: "Group F",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 23,
    RoundNumber: 2,
    DateUtc: "2024-06-22 16:00:00Z",
    Location: "BVB Stadion Dortmund",
    HomeTeam: "Türkiye",
    AwayTeam: "Portugal",
    Group: "Group F",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 24,
    RoundNumber: 2,
    DateUtc: "2024-06-22 19:00:00Z",
    Location: "Stadion Köln",
    HomeTeam: "Belgium",
    AwayTeam: "Romania",
    Group: "Group E",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 25,
    RoundNumber: 3,
    DateUtc: "2024-06-23 19:00:00Z",
    Location: "Frankfurt Stadion",
    HomeTeam: "Switzerland",
    AwayTeam: "Germany",
    Group: "Group A",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 26,
    RoundNumber: 3,
    DateUtc: "2024-06-23 19:00:00Z",
    Location: "Arena Stuttgart",
    HomeTeam: "Scotland",
    AwayTeam: "Hungary",
    Group: "Group A",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 27,
    RoundNumber: 3,
    DateUtc: "2024-06-24 19:00:00Z",
    Location: "Düsseldorf Arena",
    HomeTeam: "Albania",
    AwayTeam: "Spain",
    Group: "Group B",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 28,
    RoundNumber: 3,
    DateUtc: "2024-06-24 19:00:00Z",
    Location: "RB Arena",
    HomeTeam: "Croatia",
    AwayTeam: "Italy",
    Group: "Group B",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 29,
    RoundNumber: 3,
    DateUtc: "2024-06-25 16:00:00Z",
    Location: "Olympiastadion",
    HomeTeam: "Netherlands",
    AwayTeam: "Austria",
    Group: "Group D",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 30,
    RoundNumber: 3,
    DateUtc: "2024-06-25 16:00:00Z",
    Location: "BVB Stadion Dortmund",
    HomeTeam: "France",
    AwayTeam: "Poland",
    Group: "Group D",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 31,
    RoundNumber: 3,
    DateUtc: "2024-06-25 19:00:00Z",
    Location: "Stadion Köln",
    HomeTeam: "England",
    AwayTeam: "Slovenia",
    Group: "Group C",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 32,
    RoundNumber: 3,
    DateUtc: "2024-06-25 19:00:00Z",
    Location: "Fußball Arena München",
    HomeTeam: "Denmark",
    AwayTeam: "Serbia",
    Group: "Group C",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 33,
    RoundNumber: 3,
    DateUtc: "2024-06-26 16:00:00Z",
    Location: "Frankfurt Stadion",
    HomeTeam: "Slovakia",
    AwayTeam: "Romania",
    Group: "Group E",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 34,
    RoundNumber: 3,
    DateUtc: "2024-06-26 16:00:00Z",
    Location: "Arena Stuttgart",
    HomeTeam: "Ukraine",
    AwayTeam: "Belgium",
    Group: "Group E",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 35,
    RoundNumber: 3,
    DateUtc: "2024-06-26 19:00:00Z",
    Location: "Arena AufSchalke",
    HomeTeam: "Georgia",
    AwayTeam: "Portugal",
    Group: "Group F",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 36,
    RoundNumber: 3,
    DateUtc: "2024-06-26 19:00:00Z",
    Location: "Volksparkstadion",
    HomeTeam: "Czechia",
    AwayTeam: "Türkiye",
    Group: "Group F",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
];
const newHtmlData = document.querySelector(".js-tbody-matches");
const TeamFromTable = document.querySelector(".js-team-name");
const LS_KEY_TEAM = "Team";
const LS_KEY_GROUP = "Group";
const teamChoice = JSON.parse(localStorage.getItem(LS_KEY_TEAM)) ?? "All";
const groupChoice = JSON.parse(localStorage.getItem(LS_KEY_GROUP)) ?? "All";

function onCreateHtmlData(ChoiceTeam, groupChoice) {
  localStorage.removeItem(LS_KEY_TEAM);
  localStorage.removeItem(LS_KEY_GROUP);
  const header = document.querySelector(".table-container h2");
  header.innerHTML = `${ChoiceTeam} matches`;
  console.log(header);
  return allFixtures
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
        // let xDone = HomeTeamScore === " " ? " " : "-";
        if (groupChoice == Group || groupChoice == "All") {
          if (
            ChoiceTeam == "All" ||
            ChoiceTeam === HomeTeam ||
            ChoiceTeam === AwayTeam
          ) {
            return `<tr>
                  <td>${DateUtc.slice(5, 10)}</td>
                  <td>${Group.slice(6, 7)}</td>
                  <td class="table-team-name js-team-name">${HomeTeam}</td>
                  <td class="table-team-name js-team-name">${AwayTeam}</td>
                  <td>${HomeTeamScore}</td>
                  <td>${AwayTeamScore}</td>
                </tr>`;
          } else {
            return;
          }
        } else {
          return;
        }
      }
    )
    .join("");
}

// function onChoiceTeamFromTable(Tam){
//   const
// }

newHtmlData.insertAdjacentHTML(
  "beforeend",
  onCreateHtmlData(teamChoice, groupChoice)
);
