const allPlayers = [
  {
    playerId: 1,
    group: "fantasy",
    playerName: "Beyduik",
    score: 197,
  },
  {
    playerId: 2,
    group: "fantasy",
    playerName: "Dubrovin",
    score: 196,
  },
  {
    playerId: 3,
    group: "family",
    playerName: "Filip Vlasov",
    score: 139,
  },
  {
    playerId: 4,
    group: "fantasy",
    playerName: "Gennadii",
    score: 165,
  },
  {
    playerId: 5,
    group: "fantasy",
    playerName: "Honcharuk",
    score: 150,
  },
  {
    playerId: 6,
    group: "family",
    playerName: "Ivan",
    score: 87,
  },
  {
    playerId: 7,
    group: "fantasy",
    playerName: "Krasnoruckyj",
    score: 205,
  },
  {
    playerId: 8,
    group: "family",
    playerName: "Makar",
    score: 43,
  },
  {
    playerId: 9,
    group: "fantasy",
    playerName: "Manzhelei",
    score: 136,
  },
  {
    playerId: 10,
    group: "fantasy",
    playerName: "Revin",
    score: 202,
  },
  {
    playerId: 11,
    group: "fantasy",
    playerName: "Lozytskyi",
    score: 191,
  },
  {
    playerId: 12,
    group: "family",
    playerName: "Shulga S",
    score: 189,
  },
  {
    playerId: 13,
    group: "fantasy",
    playerName: "Shulga S",
    score: 189,
  },
  {
    playerId: 14,
    group: "family",
    playerName: "Tetiana",
    score: 167,
  },
  {
    playerId: 15,
    group: "fantasy",
    playerName: "VetaL",
    score: 187,
  },
  {
    playerId: 16,
    group: "family",
    playerName: "Anton",
    score: 3,
  },
];
const newTbodyPlayers = document.querySelector(".js-tbody-players");
const dropdown = document.getElementById("options");

function onCreatePlayersList(selectGroup = "fantasy") {
  let i = 0;
  console.log(allPlayers);
  return allPlayers
    .toSorted((a, b) => b.score - a.score)
    .map(({ group, playerName, score }) => {
      if (group !== selectGroup) {
        return;
      }
      i = i + 1;
      return `<tr>
                  <td>${i}</td>
                  <td>${group}</td>
                  <td class="table-team-name">${playerName}</td>
                  <td>${score}</td>
                </tr>`;
    })
    .join("");
}

newTbodyPlayers.insertAdjacentHTML("beforeend", onCreatePlayersList("fantasy"));
dropdown.addEventListener("change", (evt) => {
  console.log(`Selected value: ${evt.target.value}`);
  newTbodyPlayers.innerHTML = onCreatePlayersList(evt.target.value);
});
