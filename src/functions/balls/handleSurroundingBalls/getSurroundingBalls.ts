import dynamicVars from "../../../vars/dynamicVars";
import staticVars from "../../../vars/staticVars";

function finderFunction(
  y: number,
  x: number,
  ballColor: string,
  ballsArr: position[]
) {
  const toCheck = [
    { y: y + 1, x: x },
    { y: y, x: x + 1 },
    { y: y - 1, x: x },
    { y: y, x: x - 1 },
  ];

  const balls = toCheck.filter((position) => {
    // filtering out positions out of the board
    if (
      position.x < 0 ||
      position.x > staticVars.BOARD_SIZE - 1 ||
      position.y < 0 ||
      position.y > staticVars.BOARD_SIZE - 1
    ) {
      return false;
    }

    // checking if there is a ball of the color
    if (dynamicVars.boardArray[position.y][position.x] === ballColor) {
      return true;
    }

    return false;
  });

  balls.forEach((position) => {
    const wasPositionChecked =
      ballsArr.filter((p) => position.x === p.x && position.y === p.y)
        .length !== 0;
    if (wasPositionChecked) return;

    ballsArr.push(position);
    finderFunction(position.y, position.x, ballColor, ballsArr);
  });
}

export default function checkSurrondingBalls(
  y: number,
  x: number,
  ballColor: string
) {
  let balls: position[] = [];

  finderFunction(y, x, ballColor, balls);
  return balls;
}
