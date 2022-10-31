import dynamicVars from "../../../../vars/dynamicVars";
import staticVars from "../../../../vars/staticVars";

export default function finderFunction(
  y: number,
  x: number,
  direction: position,
  ballColor: string,
  ballsArr: position[]
) {
  const position = { y: y + direction.y, x: x + direction.x };
  if (
    position.x < 0 ||
    position.x > staticVars.BOARD_SIZE - 1 ||
    position.y < 0 ||
    position.y > staticVars.BOARD_SIZE - 1
  ) {
    return;
  }

  // checking if there is a ball of the color
  if (dynamicVars.boardArray[position.y][position.x] !== ballColor) return;

  const wasPositionChecked =
    ballsArr.filter((p) => position.x === p.x && position.y === p.y).length !==
    0;
  if (wasPositionChecked) return;

  ballsArr.push(position);
  finderFunction(position.y, position.x, direction, ballColor, ballsArr);
}
