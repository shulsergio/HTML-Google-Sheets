export async function onCreateDataFromJson() {
  let matchArray = [];
  try {
    const response = await fetch(
      // "./js/euro24.json"
      "https://shulsergio.github.io/HTML-Google-Sheets/js/euro24.json"
    );
    const data = await response.json();
    data.forEach((item) => {
      matchArray.push(item);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return matchArray;
}

export function onTopScoresList(data, team) {
  let goalPlayer = 0;
  let result = [{ name: null, team: null, goals: 0, penalty: 0 }];
  for (let i = 0; data[i].HomeTeamScore !== null; i++) {
    data[i].goals1.forEach((goal) => {
      if (data[i].HomeTeamScore === null || data[i].HomeTeamScore === 0) return;
      if (goal.owngoal === true) return;
      if (data[i].HomeTeam !== team && team !== "all") return;
      goalPlayer = result.find((player) => player.name === goal.name);
      if (goalPlayer === undefined) {
        result.push({
          name: goal.name,
          team: data[i].HomeTeam,
          goals: 1,
        });
      } else {
        goalPlayer.goals++;
      }
    });
    data[i].goals2.forEach((goal) => {
      if (data[i].AwayTeamScore === null || data[i].AwayTeamScore === 0) return;
      if (goal.owngoal === true) return;
      if (data[i].AwayTeam !== team && team !== "all") return;
      goalPlayer = result.find((player) => player.name === goal.name);
      if (goalPlayer === undefined) {
        result.push({
          name: goal.name,
          team: data[i].AwayTeam,
          goals: 1,
        });
      } else {
        goalPlayer.goals++;
      }
    });
  }
  return result.slice(1).toSorted((a, b) => b.goals - a.goals);
}
