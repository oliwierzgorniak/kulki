import dynamicVars from "../../../vars/dynamicVars";
import staticVars from "../../../vars/staticVars";

function finderFunction(
  y: number,
  x: number,
  direction: position,
  ballColor: string,
  ballsArr: position[]
) {
  // const surroundingPositions = [
  //   { y: y + 1, x: x },
  //   { y: y + 1, x: x + 1 },
  //   { y: y, x: x + 1 },
  //   { y: y - 1, x: x + 1 },
  //   { y: y - 1, x: x },
  //   { y: y - 1, x: x - 1 },
  //   { y: y, x: x - 1 },
  //   { y: y + 1, x: x - 1 },
  // ];

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

export default function checkSurrondingBalls(
  y: number,
  x: number,
  ballColor: string
) {
  let balls: position[][] = [];

  const directions: directionInterface[][] = [
    [
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ],
    [
      { x: 1, y: 1 },
      { x: -1, y: -1 },
    ],
    [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
    ],
    [
      { x: 1, y: -1 },
      { x: -1, y: 1 },
    ],
  ];

  const movedBallPosition = { y: y, x: x };

  directions.forEach((directionPair) => {
    let ballsFromPair: position[] = [movedBallPosition];
    finderFunction(y, x, directionPair[0], ballColor, ballsFromPair);
    finderFunction(y, x, directionPair[1], ballColor, ballsFromPair);
    balls.push(ballsFromPair);
  });

  balls.sort((a, b) => b.length - a.length);

  return balls.length > 0 ? balls[0] : [];
}
