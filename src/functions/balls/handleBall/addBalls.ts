import dynamicVars from "../../../vars/dynamicVars";
import staticVars from "../../../vars/staticVars";
import getBallElement from "./getBallElement";

export default function addBalls() {
  let currentBallIndex = 0;
  while (currentBallIndex < dynamicVars.nextBalls.length) {
    const { y, x } = getRandomPosition(staticVars.BOARD_SIZE);

    // space occupied
    if (dynamicVars.boardArray[y][x] !== null) continue;

    const ballColor = dynamicVars.nextBalls[currentBallIndex];
    dynamicVars.boardArray[y][x] = ballColor;
    dynamicVars.boardArrayAlgorithm[y][x] = ballColor;
    let cellElement: HTMLDivElement | null = document.querySelector(
      `[data-y="${y}"][data-x="${x}"]`
    );
    if (cellElement) {
      const ballElement = getBallElement(ballColor);
      cellElement.append(ballElement);
    }

    currentBallIndex++;
  }
}

function getRandomPosition(board_SIZE: number): { x: number; y: number } {
  return { x: getRandom(board_SIZE), y: getRandom(board_SIZE) };
}

function getRandom(limit: number): number {
  return Math.floor(Math.random() * limit);
}
