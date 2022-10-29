import dynamicVars from "../../vars/dynamicVars";
import staticVars from "../../vars/staticVars";

export default function doesBallHasMove(y: number, x: number) {
  const surroundingPositions = [
    { y: y + 1, x: x },
    { y: y, x: x + 1 },
    { y: y - 1, x: x },
    { y: y, x: x - 1 },
  ];

  for (let position of surroundingPositions) {
    if (
      position.x < 0 ||
      position.x > staticVars.BOARD_SIZE - 1 ||
      position.y < 0 ||
      position.y > staticVars.BOARD_SIZE - 1
    ) {
      continue;
    }

    const cell = dynamicVars.boardArray[position.y][position.x];
    if (!cell) {
      return true;
    }
  }

  return false;
}
