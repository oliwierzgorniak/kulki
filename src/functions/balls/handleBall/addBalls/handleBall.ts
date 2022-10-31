import dynamicVars from "../../../../vars/dynamicVars";
import getBallElement from "../getBallElement";

export default function handleBall(
  y: number,
  x: number,
  currentBallIndex: number
) {
  const ballColor = dynamicVars.nextBalls[currentBallIndex];
  dynamicVars.boardArray[y][x] = ballColor;
  dynamicVars.boardArrayAlgorithm[y][x] = ballColor;
  let cellElement: cellElementType = document.querySelector(
    `[data-y="${y}"][data-x="${x}"]`
  );
  if (cellElement) {
    const ballElement = getBallElement(ballColor);
    cellElement.append(ballElement);
  }
}
