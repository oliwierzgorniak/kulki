import dynamicVars from "../../../vars/dynamicVars";
import staticVars from "../../../vars/staticVars";
import deselectBall from "../../balls/deselectBall";
import handleBalls from "../../balls/handleBalls";
import handlePathAfterMove from "../../balls/handlePathAfterMove";
import handleSurroundingBalls from "../../balls/handleSurroundingBalls";
import moveBall from "../../balls/moveBall";
import cleanAfterPathfinding from "../../path/cleanAfterPathfinding";
import checkForEnd from "../checkForEnd";
import isTheSameBallBeingClicked from "../isTheSameBallBeingClicked";
import removeEventListeners from "../removeEventListeners";

type case2Type = (y: number, x: number) => boolean;

// 2. a ball is selected, element clicked is empty, a ball can move there
const case2: case2Type = (y, x) => {
  const isClickedElementFree = !dynamicVars.boardArray[y][x];
  if (
    dynamicVars.isBallSelected &&
    dynamicVars.isPathFound &&
    !isTheSameBallBeingClicked(y, x) &&
    isClickedElementFree
  ) {
    cleanAfterPathfinding();
    removeEventListeners();
    deselectBall();

    moveBall(y, x);
    handlePathAfterMove();

    const ballColor = dynamicVars.boardArray[y][x];
    if (typeof ballColor === "string") {
      handleSurroundingBalls(y, x, ballColor);
    }

    setTimeout(() => {
      // not adding balls when balls were removed
      if (dynamicVars.skipAddBalls) {
        dynamicVars.skipAddBalls = false;
        return true;
      }
      handleBalls();
      checkForEnd();
    }, staticVars.ADD_BALLS_DELAY);

    return true;
  }

  return false;
};

export default case2;
