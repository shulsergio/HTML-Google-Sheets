import { onTopScoresList } from "./js/function.js";
import { onCreateDataFromJson } from "./js/function.js";
const newHtmlData = document.querySelector(".js-tbody-topscores");

async function updateHtmlData() {
  let allFixtures1 = await onCreateDataFromJson();
  let newData = onTopScoresList(allFixtures1, "all");

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
  newHtmlData.insertAdjacentHTML("beforeend", htmlData);
}

updateHtmlData();
