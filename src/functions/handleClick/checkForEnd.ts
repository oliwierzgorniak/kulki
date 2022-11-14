import dynamicVars from "../../vars/dynamicVars";
import staticVars from "../../vars/staticVars";

export default function checkForEnd() {
  const numberOfCells = staticVars.BOARD_SIZE ** 2;
  if (dynamicVars.ballsOnBoard + staticVars.NUMBER_OF_BALLS < numberOfCells)
    return false;

  dynamicVars.blockInteraction = true;
  let endPopUpElement = document.createElement("div");
  endPopUpElement.id = "end-pop-up";
  endPopUpElement.innerHTML = `<h2>Koniec gry</h2><p>wynik: ${dynamicVars.score}</p>`;

  document.body.appendChild(endPopUpElement);

  return true;
}
