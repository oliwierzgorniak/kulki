import dynamicVars from "../../vars/dynamicVars";

export default function moveBall(y: number, x: number) {
  if (typeof dynamicVars.lastBallSelected === "undefined") {
    console.error("dynamicVars.lastBallSelected is undefined");
    return;
  }

  const lastBallParent = dynamicVars.lastBallSelected.parentElement;
  if (!lastBallParent) {
    console.error("!lastBallParent is true");
    return;
  }

  const prevY = Number(lastBallParent.dataset.y);
  const prevX = Number(lastBallParent.dataset.x);

  // a ball color is idicating that the ball is in a cell
  const ballColor = dynamicVars.boardArray[prevY][prevX];
  dynamicVars.boardArray[prevY][prevX] = null;
  dynamicVars.boardArray[y][x] = ballColor;

  // visual representation /////////////////////
  let newCell = document.querySelector(`.cell[data-y="${y}"][data-x="${x}"]`);
  if (!newCell) {
    console.error("!newCell is true");
    return;
  }

  newCell.appendChild(dynamicVars.lastBallSelected);
}
