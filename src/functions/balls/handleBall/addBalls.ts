import dynamicVars from "../../../vars/dynamicVars";
import staticVars from "../../../vars/staticVars";
import getRandomPosition from "./addBalls/getRandomPosition";
import handleBall from "./addBalls/handleBall";

export default function addBalls() {
  let currentBallIndex = 0;
  while (currentBallIndex < dynamicVars.nextBalls.length) {
    const { y, x } = getRandomPosition(staticVars.BOARD_SIZE);

    // space occupied
    if (dynamicVars.boardArray[y][x] !== null) continue;

    handleBall(y, x, currentBallIndex);

    currentBallIndex++;
  }

  dynamicVars.ballsOnBoard += staticVars.NUMBER_OF_BALLS;
}
